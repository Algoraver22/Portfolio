import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Employee HR Platform',
      description: 'A comprehensive employee management system featuring role-based authentication for HR administrators and staff members. The platform streamlines HR operations with secure employee record management, automated leave request processing, and internal communication through notices. Built with modern web technologies to ensure scalability and security.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Algoraver22/employee-hr-platform',
      demo: 'https://employee-hr-platform-nhq7.vercel.app/',
      image: '/assets/images/Employee-hr-platform.png',
      timeline: 'Jan 2025 – Mar 2025',
      category: 'Full Stack'
    },
    {
      title: 'Meetup Lite',
      description: 'A feature-rich video conferencing platform that enables seamless 1:1 and group video calls with real-time interaction capabilities. The application includes advanced features like screen sharing, user presence detection, session management, and post-meeting notes functionality. Integrated with Firebase for authentication and real-time data synchronization.',
      technologies: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'WebRTC', 'Firebase'],
      github: 'https://github.com/Algoraver22/meetup-lite',
      demo: 'https://68aca2795c26a23d0a5ec76d--meetuplite.netlify.app/login',
      image: '/assets/images/meetup-lite.png',
      timeline: 'Apr 2025 – Jun 2025',
      category: 'Web App'
    },
    {
      title: 'Food Manor',
      description: 'A modern and responsive food ordering platform that provides users with an intuitive dining experience. Features include real-time cart updates, comprehensive order summaries, dynamic menu rendering, and seamless checkout process. The application emphasizes user experience with reusable UI components and smooth interactions.',
      technologies: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Mock API', 'React Router'],
      github: 'https://github.com/Algoraver22/Food_Manor',
      demo: 'https://food-manor.vercel.app/',
      image: '/assets/images/Food-Manor.png',
      timeline: 'Nov 2024 – Dec 2024',
      category: 'E-commerce'
    },
    {
      title: 'Chess Game',
      description: 'An interactive chess game application featuring strategic gameplay mechanics, comprehensive move validation, and an intuitive user interface. The game implements all standard chess rules including castling, en passant, and pawn promotion. Built with vanilla JavaScript to demonstrate strong programming fundamentals and game logic implementation.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
      github: 'https://github.com/Algoraver22/Chess_Game',
      demo: 'https://chess-game-y8o8.onrender.com/',
      image: '/assets/images/chess.png',
      timeline: 'Personal Project',
      category: 'Game'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-dark-200/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] overflow-hidden border border-orange-200 dark:border-orange-800 group hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category & Timeline */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 dark:from-orange-900/50 dark:via-pink-900/50 dark:to-purple-900/50 rounded-full border border-orange-200 dark:border-orange-700">
                    <span className="text-xs font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                      {project.category}
                    </span>
                  </span>
                  <div className="flex items-center text-xs">
                    <FiCalendar className="mr-1 text-orange-600 dark:text-orange-400" size={12} />
                    <span className="font-bold text-orange-600 dark:text-orange-400">{project.timeline}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                  >
                    <FiExternalLink className="mr-2" size={14} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      borderColor: "rgb(147, 51, 234)",
                      color: "rgb(147, 51, 234)",
                      boxShadow: "0 15px 30px rgba(147, 51, 234, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 text-sm"
                  >
                    <FiGithub className="mr-2" size={14} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Algoraver22"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <FiGithub className="mr-2" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;