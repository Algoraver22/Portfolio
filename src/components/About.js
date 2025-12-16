import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: '300+ Problems Solved',
      description: 'Active problem solver on LeetCode and GeeksforGeeks'
    },
    {
      icon: FiAward,
      title: 'Basketball Champion',
      description: '1st position in North-Zone Tournament (2019)'
    },
    {
      icon: FiUsers,
      title: 'Team Player',
      description: 'College basketball team representative'
    },
    {
      icon: FiTrendingUp,
      title: 'CGPA 8.4/10',
      description: 'Strong academic performance in Computer Science'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                  I’m a Computer Science student at KIET Group of Institutions, currently working towards a career as a Data Analyst and AI/ML Engineer. I enjoy working with data, finding patterns, and turning information into useful insights. My interest in technology started out of curiosity and gradually grew as I explored different areas of development.
              </p>

              <p>
                  I also have hands-on experience as a MERN stack developer and have built several projects focused on solving real-world problems. While working on these projects, I learned the importance of clean code, logical thinking, and building interfaces that are easy for users to understand.
              </p>

              <p>
                  Apart from academics and coding, I actively participate in sports and have represented my college in both basketball and cricket tournaments, winning matches at the college level. Sports have helped me develop teamwork, discipline, and a competitive mindset, which I carry into my learning and problem-solving approach.
              </p>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What I'm Currently Doing:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Building scalable MERN stack applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Performing data analysis and querying using Python and SQL
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Building and evaluating machine learning models on structured data
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Solving algorithmic problems and logical challenges
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -3, 0],
                  boxShadow: [
                    "0 8px 25px rgba(59, 130, 246, 0.15)",
                    "0 12px 35px rgba(139, 92, 246, 0.25)",
                    "0 8px 25px rgba(59, 130, 246, 0.15)"
                  ]
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { delay: index * 0.1, ease: "easeOut" },
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  y: { duration: 4, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" },
                  boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)"
                }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] border border-orange-200 dark:border-orange-800 group hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <highlight.icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                </div>
                <motion.h4 
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                  className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                  {highlight.title}
                </motion.h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
