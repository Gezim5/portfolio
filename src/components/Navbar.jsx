import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.nav
      className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Gezim Portofolio</Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FiSun/> : <FiMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
