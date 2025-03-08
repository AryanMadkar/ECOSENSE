import React from "react";

const Process = () => {
  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center justify-start p-4 bg-gray-900">
      <h1 className="text-3xl font-bold my-6 text-center text-gray-100">
        The Journey of Our Energy-Efficient System: From Prototype to Future Developments
      </h1>
      <h2 className="text-4xl font-bold text-gray-200 mb-8">Introduction</h2>
      
      <ul className="timeline timeline-vertical">
        {/* Circuit Board Design */}
        <li>
          <div className="timeline-start timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold text-gray-100">Circuit Board Design</h3>
            <p className="text-sm text-gray-300 mt-2">
              In our prototype, we used a standard breadboard for flexibility during the prototyping phase. This allowed us to easily modify and adjust our circuit design without permanent changes, facilitating quick testing and iteration.
            </p>
          </div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <hr className="bg-gray-700" />
        </li>

        {/* Sensor Selection */}
        <li>
          <hr className="bg-gray-700" />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold text-gray-100">Sensor Selection</h3>
            <p className="text-sm text-gray-300 mt-2">
              We chose an ultrasonic sensor for its ease of use, affordability, and high accuracy. Its reliability and efficiency made it ideal for initial testing, allowing us to validate our ideas without significant financial investment.
            </p>
          </div>
          <hr className="bg-gray-700" />
        </li>

        {/* Microcontroller Choice */}
        <li>
          <hr className="bg-gray-700" />
          <div className="timeline-start timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold text-gray-100">Microcontroller Choice</h3>
            <p className="text-sm text-gray-300 mt-2">
              We selected the Arduino UNO for its user-friendly coding environment and community support. Its straightforward programming interface allowed us to efficiently manage sensor data and control components during prototyping.
            </p>
          </div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <hr className="bg-gray-700" />
        </li>

        {/* System Functionality */}
        <li>
          <hr className="bg-gray-700" />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold text-gray-100">System Functionality</h3>
            <p className="text-sm text-gray-300 mt-2">
              The prototype counts entries and exits using ultrasonic sensors placed at doorways. The Arduino UNO processes the data to toggle lights and fans based on occupancy, demonstrating the concept effectively.
            </p>
          </div>
          <hr className="bg-gray-700" />
        </li>
      </ul>
    </div>
  );
};

export default Process;