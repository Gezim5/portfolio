import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import StatCard from '../components/StatsCounter';
import ProjectCard from '../components/ProjectCard';
import { stats } from '../data/stats';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero */}
      <Hero />

      {/* About / CV */}
      <About />

      {/* Stats */}
      <section
        id="stats"
        className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Developer Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Testimonials (Optional / Static for Now) */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.blockquote
            className="bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <p>“Gezim is a very talented developer who delivers clean code fast.”</p>
            <footer className="mt-4 text-sm font-semibold">— Mentor, Ketri Academy</footer>
          </motion.blockquote>
          <motion.blockquote
            className="bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <p>“He’s passionate, hard-working and always learning new tools.”</p>
            <footer className="mt-4 text-sm font-semibold">— Lead, 9DOTS AGENCY</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-2">
          <FaGithub className="text-3xl" /> GitHub Contributions
        </h2>
        <img
          src={`https://ghchart.rshah.org/4691f6/Gezim5`}
          alt="GitHub Contribution Chart"
          className="mx-auto rounded-lg shadow-lg dark:invert"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        </p>
      </section>
    </div>
  );
};

export default Home;
