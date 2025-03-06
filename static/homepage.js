document.addEventListener("DOMContentLoaded", function () {
    const lightbulbs = document.querySelectorAll('.lightbulb');
    const vents = document.querySelectorAll('.Acvent');
    const frontElements = document.querySelectorAll(".frontstyle");
    
    let lightTimers = {}; // Track the on time for each lightbulb in seconds
    let lightConsumption = {}; // Track consumption for each lightbulb
    let lightIntervals = {}; // Store interval IDs for each lightbulb
    let popupIntervals = {}; // Store popup update intervals
    let ventState = false; // Track state of all AC vents (on/off)

    // Initialize lightbulbs to be OFF by default
    lightbulbs.forEach(lightbulb => {
        const lightId = lightbulb.id || `light-${Math.random().toString(36).substr(2, 9)}`;
        
        // Assign unique ID if not present
        if (!lightbulb.id) {
            lightbulb.id = lightId;
        }

        // Initialize light state, timers, and consumption
        lightbulb.style.boxShadow = ''; // Default OFF state (no glow)
        lightTimers[lightId] = 0; // Time in seconds
        lightConsumption[lightId] = 0;

        // Handle click to toggle light
        lightbulb.addEventListener('click', () => {
            if (lightbulb.style.boxShadow) {
                // Turn OFF the light (remove glow)
                lightbulb.style.boxShadow = '';
                clearInterval(lightIntervals[lightId]); // Stop the timer
                clearInterval(popupIntervals[lightId]); // Stop popup updates
            } else {
                // Turn ON the light (add glow)
                lightbulb.style.boxShadow = '1px 1px 200px 50px yellow';
                lightIntervals[lightId] = setInterval(() => {
                    lightTimers[lightId]++;
                    lightConsumption[lightId] = lightTimers[lightId] * 0.1; // Assume 0.1 units per second
                }, 1000);
            }
        });

        // Handle right-click to show popup
        lightbulb.addEventListener('contextmenu', (event) => {
            event.preventDefault(); // Prevent default context menu

            // Check if popup exists, create if not
            let popup = document.getElementById(`popup-${lightId}`);
            if (!popup) {
                popup = document.createElement('div');
                popup.id = `popup-${lightId}`;
                popup.classList.add('popup');
                document.body.appendChild(popup);
            }

            // Position popup near the cursor
            popup.style.left = `${event.pageX}px`;
            popup.style.top = `${event.pageY}px`;
            popup.style.display = 'block';
            popup.classList.add('fade-in');

            // Start updating the popup live
            if (popupIntervals[lightId]) clearInterval(popupIntervals[lightId]);

            popupIntervals[lightId] = setInterval(() => {
                // Convert time from seconds to hours, minutes, and seconds
                const hours = Math.floor(lightTimers[lightId] / 3600);
                const minutes = Math.floor((lightTimers[lightId] % 3600) / 60);
                const seconds = lightTimers[lightId] % 60;

                const timeFormatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

                // Update popup content
                popup.innerHTML = `
                    <div class="popup-content">
                        <h4>Light Info</h4>
                        <p>⏱️ Time On: ${timeFormatted}</p>
                        <p>⚡ Consumption: ${lightConsumption[lightId].toFixed(2)} kWh</p>
                        <canvas id="graph-${lightId}" width="250" height="150"></canvas>
                        <button class="close-popup">✖ Close</button>
                    </div>
                `;

                // Initialize or update the graph
                const canvas = document.getElementById(`graph-${lightId}`);
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous chart
                ctx.beginPath();
                ctx.moveTo(0, canvas.height - (lightConsumption[lightId] * 10)); // Example graph calculation
                ctx.lineTo(canvas.width, canvas.height - (lightConsumption[lightId] * 10));
                ctx.strokeStyle = '#ff0000';
                ctx.stroke();
            }, 1000);

            // Close popup on click
            const closeBtn = popup.querySelector('.close-popup');
            closeBtn.addEventListener('click', () => {
                popup.style.display = 'none';
                clearInterval(popupIntervals[lightId]); // Stop popup updates
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const frontElements = document.querySelectorAll(".frontstyle");
    const backElements = document.querySelectorAll(".backstyle");

    frontElements.forEach((element) => {
      element.addEventListener("animationend", () => {
        element.classList.add("inswing-final");
      });
    });

    backElements.forEach((element) => {
      element.addEventListener("animationend", () => {
        element.classList.add("outswing-final");
      });
    });
  });