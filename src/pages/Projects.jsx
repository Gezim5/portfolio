import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => (
  <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-10">PROJECTS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  </div>
);

export default Projects;
