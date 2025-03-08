import React from "react";
import { motion } from "framer-motion";

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.8 } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center justify-start p-4 bg-gray-900">
      <motion.h1
        className="text-3xl font-bold my-6 text-center text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Journey of Our Energy-Efficient System: From Prototype to Future
        Developments
      </motion.h1>

      <motion.h2
        className="text-4xl font-bold text-gray-200 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Introduction
      </motion.h2>

      <motion.ul
        className="timeline timeline-vertical"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Circuit Board Design */}
        <motion.li variants={containerVariants}>
          <motion.div
            className="timeline-start timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 20px rgba(96, 165, 250, 0.3)",
            }}
          >
            <h3 className="text-lg font-bold text-gray-100">
              Circuit Board Design
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              In our prototype, we used a standard breadboard for flexibility
              during the prototyping phase. This allowed us to easily modify and
              adjust our circuit design without permanent changes, facilitating
              quick testing and iteration. 
            </p>
          </motion.div>
          <motion.div className="timeline-middle" variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
        </motion.li>

        {/* Sensor Selection */}
        <motion.li variants={containerVariants}>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
          <motion.div className="timeline-middle" variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div
            className="timeline-end timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 20px rgba(96, 165, 250, 0.3)",
            }}
          >
            <h3 className="text-lg font-bold text-gray-100">
              Sensor Selection
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              We chose an ultrasonic sensor for its ease of use, affordability,
              and high accuracy. Its reliability and efficiency made it ideal
              for initial testing, allowing us to validate our ideas without
              significant financial investment. For the next phase, we
              integrated PIR (Passive Infrared) and mmWave (millimeter-wave)
              sensors. 
            </p>
          </motion.div>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
        </motion.li>

        {/* Microcontroller Choice */}
        <motion.li variants={containerVariants}>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
          <motion.div
            className="timeline-start timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 20px rgba(96, 165, 250, 0.3)",
            }}
          >
            <h3 className="text-lg font-bold text-gray-100">
              Microcontroller Choice
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              We selected the Arduino UNO for its user-friendly coding
              environment and community support. Its straightforward programming
              interface allowed us to efficiently manage sensor data and control
              components during prototyping.
            </p>
          </motion.div>
          <motion.div className="timeline-middle" variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
        </motion.li>

        {/* System Functionality */}
        <motion.li variants={containerVariants}>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
          <motion.div className="timeline-middle" variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div
            className="timeline-end timeline-box bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 20px rgba(96, 165, 250, 0.3)",
            }}
          >
            <h3 className="text-lg font-bold text-gray-100">
              System Functionality
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              The prototype counts entries and exits using ultrasonic sensors
              placed at doorways. The Arduino UNO processes the data to toggle
              lights and fans based on occupancy, demonstrating the concept
              effectively.
            </p>
          </motion.div>
          <motion.hr className="bg-gray-700" variants={lineVariants} />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Process;
