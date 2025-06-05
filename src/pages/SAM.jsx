import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SAM = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const skills = [
    { name: 'Frontend', items: ['React', 'Angular', 'Vue.js', 'Next.js'], icon: '🎨' },
    { name: 'Backend', items: ['Node.js', 'Python', 'Java', '.NET'], icon: '⚙️' },
    { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'], icon: '🗄️' },
    { name: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Docker'], icon: '☁️' },
  ];

  const projects = [
    {
      title: "Project Alpha",
      description: "A revolutionary web application",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project-alpha.jpg"
    },
    // Add more projects...
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-10">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.02 }}
            />
          ))}
        </div>
        
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white text-center z-10"
        >
          Skills And More
        </motion.h1>
      </div>

      {/* Interactive Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-black/30 backdrop-blur-sm rounded-lg p-6 hover:bg-black/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-3 rounded-lg text-gray-300 hover:text-white transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Portfolio Cards */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
};

export default SAM;