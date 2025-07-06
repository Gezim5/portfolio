import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaCode, FaGithub, FaCalendarAlt } from 'react-icons/fa';

const icons = {
  'Projects Completed': <FaCode className="text-4xl text-indigo-500" />,
  'GitHub Followers': <FaGithub className="text-4xl text-green-500" />,
  'Experience (months)': <FaCalendarAlt className="text-4xl text-pink-500" />,
};

const StatCard = ({ stat }) => (
  <motion.div
    className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center border border-indigo-200 dark:border-gray-700 hover:scale-105 transform transition-all duration-300"
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    <div className="mb-3 flex justify-center">{icons[stat.label]}</div>
    <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
      <CountUp end={stat.value} duration={2} />
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
  </motion.div>
);

export default StatCard;
