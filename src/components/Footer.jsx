import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-800 py-6">
    <div className="container mx-auto text-center">
      <p className="mb-2">© {new Date().getFullYear()} Gezim. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/Gezim5" aria-label="GitHub"><FaGithub /></a>
        <a href="https://al.linkedin.com/in/gclanguange" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.instagram.com/xhimicela_" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
