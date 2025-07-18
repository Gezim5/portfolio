import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLaptopCode, FaTools, FaLanguage } from 'react-icons/fa';

const experience = [
  {
    title: "Web Developer",
    company: "9DOTS AGENCY",
    location: "Tirana, Albania",
    date: "Sep 2024 - Jan 2025",
    details: [
      "Built responsive websites with HTML, CSS, JavaScript, PHP, Python.",
      "Created server-side logic and visual UX/UI design.",
      "Integrated data from back-end services and collaborated with designers.",
    ],
  },
  {
    title: "IT Specialist",
    company: "MS GLOBAL FINANCE",
    location: "Tirana, Albania",
    date: "Aug 2024 - Sep 2024",
    details: [
      "Provided hardware/software support, network maintenance.",
      "Trained users and configured systems.",
    ],
  },
  {
    title: "Hardware Repair Technician",
    company: "COLOMBO",
    location: "Tirana, Albania",
    date: "Apr 2024 - Aug 2024",
    details: [
      "Diagnosed & repaired computers and printers.",
      "Managed maintenance and installations.",
    ],
  },
  {
    title: "Mobile Phone Repairer",
    company: "Çela Electronics",
    location: "Durres, Albania",
    date: "Aug 2019 - Mar 2024",
    details: [
      "Ran own repair shop, trained junior technicians.",
      "Specialized in diagnostics, soldering, and customer service.",
    ],
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind", "Python", "PHP", "Java",
  "Hardware Diagnostics", "Soldering", "Teamwork", "Problem Solving",
];

const languages = [
  { name: "Albanian", level: "Native" },
  { name: "English", level: "B1" },
  { name: "Italian", level: "B1" },
  { name: "German", level: "B1" },
];

const education = [
  {
    title: "BSc in Computer Science",
    institution: "Aleksandër Moisiu University",
    date: "Sep 2020 – Current",
  },
  {
    title: "Full Stack Development Training",
    institution: "Ketri Academy",
    date: "Sep 2024 – Dec 2024",
  },
  {
    title: "Back-End Developer Course",
    institution: "ICT Solutions",
    date: "Mar 2024 – Aug 2024",
  },
  {
    title: "Phone Repair Course",
    institution: "G-Shop",
    date: "Oct 2021 – Dec 2022",
  },
];

const About = () => (
  <motion.section
    id="about"
    className="bg-white dark:bg-gray-900 py-16 px-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

      {/* Bio */}
      <motion.p className="text-center max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        I’m <strong>Gezim Çela</strong>, a full-stack web developer with experience in hardware repair, back-end systems, and front-end design. I enjoy combining creativity with code to build professional, fast, and user-friendly digital solutions.
      </motion.p>

      {/* Experience Timeline */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><FaLaptopCode /> Work Experience</h3>
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <motion.div key={idx} className="p-5 rounded-lg shadow bg-gray-100 dark:bg-gray-800">
              <h4 className="text-xl font-bold">{job.title} – {job.company}</h4>
              <p className="text-sm text-gray-500">{job.location} | {job.date}</p>
              <ul className="list-disc list-inside mt-2">
                {job.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><FaTools /> Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-4 py-2 rounded text-center shadow"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><FaLanguage /> Languages</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((lang, i) => (
            <motion.li
              key={i}
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded shadow"
              whileHover={{ scale: 1.05 }}
            >
              <strong>{lang.name}</strong>: {lang.level}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Education & Training</h3>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="p-4 bg-yellow-100 dark:bg-yellow-800 rounded shadow"
              whileHover={{ x: 10 }}
            >
              <strong>{edu.title}</strong> <br />
              <span className="text-sm">{edu.institution}</span><br />
              <span className="text-xs text-gray-600 dark:text-gray-300">{edu.date}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div className="text-center mt-10">
        <a
          href="/assets/CV_Gezim_Cela_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition"
        >
          <FaDownload /> Download My CV
        </a>
      </div>
    </div>
  </motion.section>
);

export default About;
