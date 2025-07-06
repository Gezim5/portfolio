import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-gray-900 dark:to-black transition-all duration-500">

    {/* Glowing Background Blobs */}
    <motion.div
      className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-400 rounded-full opacity-30 blur-3xl animate-pulse"
      initial={{ scale: 0.7 }}
      animate={{ scale: 1.1 }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400 rounded-full opacity-20 blur-2xl animate-ping"
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      transition={{ repeat: Infinity, duration: 6 }}
    />

    {/* Main Content */}
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Hi, I'm Gezim Çela
    </motion.h1>

    <motion.div
      className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <TypeAnimation
        sequence={[
          "Full-Stack Developer 💻",
          1500,
          "Hardware Specialist 🔧",
          1500,
          "Tech Enthusiast 🚀",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </motion.div>

    {/* Call to Action */}
    <motion.a
      href="#projects"
      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      See My Work <FaArrowDown className="ml-2" />
    </motion.a>
  </section>
);

export default Hero;
