document.addEventListener("DOMContentLoaded", function () {
    // ===== Setup =====
    // Select LED and fan elements
    const ledLights = document.querySelectorAll('.Ledlight');
    const fans = document.querySelectorAll('.fan');

    // Set up WebSocket connection
    const socket = new WebSocket('ws://localhost:8080/status'); // Adjust URL as needed

    // ===== Central State & Usage Tracking =====
    // Relay state: for LEDs: Relay1, Relay2, Relay3; for Fans: Relay4, Relay5, Relay6.
    const relayState = {
        "Relay1": "OFF",
        "Relay2": "OFF",
        "Relay3": "OFF",
        "Relay4": "OFF",
        "Relay5": "OFF",
        "Relay6": "OFF"
    };

    // Usage statistics for each relay:
    // onTime is in seconds; powerConsumed in watt-hours.
    // When a relay turns ON, we begin tracking time.
    const usageStats = {
        "Relay1": { onTime: 0, powerConsumed: 0 },
        "Relay2": { onTime: 0, powerConsumed: 0 },
        "Relay3": { onTime: 0, powerConsumed: 0 },
        "Relay4": { onTime: 0, powerConsumed: 0 },
        "Relay5": { onTime: 0, powerConsumed: 0 },
        "Relay6": { onTime: 0, powerConsumed: 0 }
    };

    // Consumption rates (watts) for each relay
    // Adjust these rates as needed.
    const consumptionRates = {
        "Relay1": 10,
        "Relay2": 10,
        "Relay3": 10,
        "Relay4": 50,
        "Relay5": 50,
        "Relay6": 50
    };

    // Every second, update the onTime and power consumed for relays that are ON.
    setInterval(() => {
        Object.keys(relayState).forEach(relay => {
            if (relayState[relay] === "ON") {
                usageStats[relay].onTime += 1;
                // Power (in watt-hours) = (rate in watts) * (time in seconds / 3600)
                usageStats[relay].powerConsumed = (consumptionRates[relay] * usageStats[relay].onTime) / 3600;
            }
        });
    }, 1000);

    // ===== UI Update Functions =====
    function updateLEDs() {
        // Mapping: Relay1 -> [led1, led2], Relay2 -> [led3, led4], Relay3 -> [led5, led6]
        const ledMapping = {
            "Relay1": ["led1", "led2"],
            "Relay2": ["led3", "led4"],
            "Relay3": ["led5", "led6"]
        };
        Object.keys(ledMapping).forEach(relay => {
            ledMapping[relay].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (relayState[relay] === "ON") {
                        el.classList.add("active");
                        el.style.boxShadow = '1px 1px 200px 50px white';
                    } else {
                        el.classList.remove("active");
                        el.style.boxShadow = '';
                    }
                }
            });
        });
    }

    function updateFans() {
        // Mapping: Relay4 -> fan1, Relay5 -> fan2, Relay6 -> fan3
        const fanMapping = {
            "Relay4": "fan1",
            "Relay5": "fan2",
            "Relay6": "fan3"
        };
        Object.keys(fanMapping).forEach(relay => {
            const fanEl = document.getElementById(fanMapping[relay]);
            if (fanEl) {
                if (relayState[relay] === "ON") {
                    fanEl.classList.add("rotate");
                } else {
                    fanEl.classList.remove("rotate");
                }
            }
        });
    }

    function updateUI() {
        updateLEDs();
        updateFans();
    }

    // ===== WebSocket Communication =====
    socket.onmessage = function (event) {
        let dataStr = event.data;
        if (dataStr.startsWith("[Forwarded]")) {
            dataStr = dataStr.replace("[Forwarded]", "").trim();
        }
        try {
            const data = JSON.parse(dataStr);
            console.log("Received data:", data);
            Object.keys(data).forEach(relay => {
                if (relayState.hasOwnProperty(relay)) {
                    if (data[relay] !== relayState[relay]) {
                        relayState[relay] = data[relay];
                        // When a relay turns OFF (by server command), reset its usage stats.
                        if (data[relay] === "OFF") {
                            usageStats[relay].onTime = 0;
                            usageStats[relay].powerConsumed = 0;
                        }
                    }
                }
            });
            updateUI();
        } catch (e) {
            console.error("Error parsing received data:", e);
        }
    };

    function sendUpdate(relay, state) {
        if (socket.readyState === WebSocket.OPEN) {
            const message = JSON.stringify({ [relay]: state });
            socket.send(message);
            console.log(`Sent: ${relay} -> ${state}`);
        } else {
            console.warn("WebSocket not open. Unable to send data.");
        }
    }

    // ===== Popup for Usage Info =====
    // Create the popup element
    const popup = document.createElement("div");
    popup.id = "usage-popup";
    // Basic styling for the popup
    popup.style.position = "absolute";
    popup.style.background = "#fff";
    popup.style.border = "2px solid #4CAF50";
    popup.style.borderRadius = "8px";
    popup.style.padding = "15px";
    popup.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    popup.style.zIndex = "1000";
    popup.style.display = "none";
    popup.style.minWidth = "200px";
    popup.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.body.appendChild(popup);

    // Global variable to store current popup details
    let currentPopup = null; // { relay, type } where type is "Light" or "Fan"
    let popupIntervalId = null; // For live updating the popup

    // Format seconds into hh:mm:ss
    function formatTime(seconds) {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    }

    // Update popup content based on current usage stats
    function updatePopupContent() {
        if (!currentPopup) return;
        const { relay, type } = currentPopup;
        const stats = usageStats[relay];
        popup.innerHTML = `
            <div style="font-size:16px; font-weight:bold; margin-bottom:8px; color:#4CAF50;">${type} Usage</div>
            <div style="margin-bottom:8px;">Time ON: ${formatTime(stats.onTime)}</div>
            <div style="margin-bottom:12px;">Power Consumed: ${stats.powerConsumed.toFixed(2)} Wh</div>
            <button id="popup-close" style="padding:5px 10px; border:none; background:#4CAF50; color:#fff; border-radius:4px; cursor:pointer;">Close</button>
        `;
        // Attach close button event
        document.getElementById("popup-close").addEventListener("click", closePopup);
    }

    // Open popup and start live updating
    function openPopup(relay, type, x, y) {
        currentPopup = { relay, type };
        popup.style.left = x + "px";
        popup.style.top = y + "px";
        popup.style.display = "block";
        updatePopupContent();
        // Update popup every second
        popupIntervalId = setInterval(updatePopupContent, 1000);
    }

    // Close popup and clear live update interval
    function closePopup() {
        popup.style.display = "none";
        currentPopup = null;
        if (popupIntervalId) {
            clearInterval(popupIntervalId);
            popupIntervalId = null;
        }
    }

    // Hide popup when clicking elsewhere (if desired)
    document.addEventListener("click", function (e) {
        // Do not hide if the click is inside the popup.
        if (!popup.contains(e.target)) {
            closePopup();
        }
    });

    // ===== Click & Right-Click Event Listeners =====
    // For LED lights:
    ledLights.forEach(element => {
        let relay;
        if (element.dataset.relay) {
            relay = "Relay" + element.dataset.relay;
        } else {
            if (element.id === "led1" || element.id === "led2") {
                relay = "Relay1";
            } else if (element.id === "led3" || element.id === "led4") {
                relay = "Relay2";
            } else if (element.id === "led5" || element.id === "led6") {
                relay = "Relay3";
            }
        }
        // Left-click toggles the state.
        element.addEventListener('click', (e) => {
            relayState[relay] = (relayState[relay] === "ON") ? "OFF" : "ON";
            if (relayState[relay] === "OFF") {
                usageStats[relay].onTime = 0;
                usageStats[relay].powerConsumed = 0;
            }
            updateUI();
            sendUpdate(relay, relayState[relay]);
        });
        // Right-click to show live usage info.
        element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            // For LED elements, we call them "Light"
            openPopup(relay, "Light", e.pageX, e.pageY);
        });
    });

    // For fan elements:
    fans.forEach(fan => {
        let relay;
        if (fan.dataset.relay) {
            relay = "Relay" + fan.dataset.relay;
        } else {
            if (fan.id === "fan1") {
                relay = "Relay4";
            } else if (fan.id === "fan2") {
                relay = "Relay5";
            } else if (fan.id === "fan3") {
                relay = "Relay6";
            }
        }
        // Left-click toggles the state.
        fan.addEventListener('click', (e) => {
            relayState[relay] = (relayState[relay] === "ON") ? "OFF" : "ON";
            if (relayState[relay] === "OFF") {
                usageStats[relay].onTime = 0;
                usageStats[relay].powerConsumed = 0;
            }
            updateUI();
            sendUpdate(relay, relayState[relay]);
        });
        // Right-click to show live usage info.
        fan.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            // For fan elements, display "Fan"
            openPopup(relay, "Fan", e.pageX, e.pageY);
        });
    });

    // Initial UI update
    updateUI();
});
