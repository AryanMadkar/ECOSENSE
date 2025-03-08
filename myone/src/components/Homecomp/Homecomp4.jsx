import React from "react";
import { motion } from "framer-motion";

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Homecomp4 = () => {
  return (
    <motion.div 
      className="h-fit mt-10 bg-black w-full py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 lg:px-8">
        {/* Stat 1 */}
        <motion.div
          className="stat bg-gray-900 rounded-xl p-6 lg:w-80"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="stat-figure text-primary"
            variants={floatVariants}
            animate="float"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="stat-title text-gray-300">Total Likes</div>
            <div className="stat-value text-primary text-4xl lg:text-5xl">25.6K</div>
            <div className="stat-desc text-gray-400">21% more than last month</div>
          </motion.div>
        </motion.div>

        {/* Stat 2 */}
        <motion.div
          className="stat bg-gray-900 rounded-xl p-6 lg:w-80"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="stat-figure text-secondary"
            variants={floatVariants}
            animate="float"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="stat-title text-gray-300">Page Views</div>
            <div className="stat-value text-secondary text-4xl lg:text-5xl">2.6M</div>
            <div className="stat-desc text-gray-400">21% more than last month</div>
          </motion.div>
        </motion.div>

        {/* Stat 3 */}
        <motion.div
          className="stat bg-gray-900 rounded-xl p-6 lg:w-80"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="stat-figure text-secondary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="avatar online">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="User avatar"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="stat-value text-4xl lg:text-5xl">86%</div>
            <div className="stat-title text-gray-300">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homecomp4;