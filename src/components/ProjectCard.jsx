import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-4"
    whileHover={{ scale: 1.03 }}
  >
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p>{project.description}</p>

    <div className="rounded overflow-hidden border border-gray-300 dark:border-gray-700">
      <iframe
        src={project.repo}
        title={`${project.title} Live Preview`}
        width="100%"
        height="300"
        style={{ border: 'none' }}
        loading="lazy"
      ></iframe>
    </div>

    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline font-medium"
    >
      View Site
    </a>
  </motion.div>
);

export default ProjectCard;
