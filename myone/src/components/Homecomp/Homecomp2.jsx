import React from "react";
import { motion } from "framer-motion";
import electricity from "/videos/elect.mp4";
import data from "/images/DATA_img.jpg";
import process from "/images/proccess.jpg";

const Homecomp2 = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(240,46,170,0.5)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="min-h-screen mt-4 rounded-3xl overflow-hidden shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] w-full flex bg-black flex-col items-center justify-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.video
        src={electricity}
        className="w-full mt-4 rounded-3xl h-auto max-w-[100%] lg:max-w-[100%] object-cover"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.video>

      <div className="flex flex-col p-6 text-center mt-10 w-full lg:w-full">
        {/* Data Analytics Section */}
        <motion.div
          className="hero border-4 mb-4 rounded-3xl bg-black text-white min-h-screen p-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="hero-content flex-col lg:flex-row items-center text-center lg:text-left">
            <motion.img
              src={data}
              className="w-full lg:w-2/3 rounded-lg shadow-2xl"
              alt="Data Insights"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div
              className="lg:ml-10"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Harnessing Data for Energy Efficiency
              </motion.h1>
              <motion.p
                className="py-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                In today’s world, efficient energy consumption is crucial. Our
                advanced platform leverages real-time data analytics to monitor
                and optimize electricity usage. By identifying consumption
                patterns, we can detect waste and provide actionable insights.
              </motion.p>
              <motion.button
                className="btn btn-primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore Data Solutions
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Energy Saving Process Section */}
        <motion.div
          className="hero border-4 mb-4 rounded-3xl bg-black text-white min-h-screen p-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse items-center text-center lg:text-left">
            <motion.img
              src={process}
              className="w-full lg:w-2/3 rounded-lg shadow-2xl"
              alt="Energy Saving Process"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div
              className="lg:mr-10"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                The Process of Smart Energy Conservation
              </motion.h1>
              <motion.p
                className="py-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Our intelligent energy-saving system continuously monitors your
                electricity usage, identifying inefficiencies and providing
                automated solutions. With cutting-edge technology, we optimize
                power consumption in real time, ensuring that no energy goes to
                waste.
              </motion.p>
              <motion.button
                className="btn btn-primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homecomp2;
