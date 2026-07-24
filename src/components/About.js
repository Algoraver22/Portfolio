import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Projects', value: '6+' },
    { label: 'Internships', value: '2+' },
    { label: 'CGPA', value: '8.33' },
    { label: 'DSA Problems', value: '400+' },
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

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-8">
              <p>
                I’m a Computer Science student at KIET Group of Institutions,
                aiming to build a career as a Data Analyst and AI/ML Engineer.
                I enjoy working with data, identifying patterns, and converting
                information into meaningful insights.
              </p>

              <p>
                I also have hands-on experience as a MERN stack developer,
                having built multiple projects that address real-world problems.
                These projects helped me strengthen my coding practices, logical
                thinking, and user-focused design skills.
              </p>

              <p>
                Beyond academics and coding, I have represented my college in
                basketball and cricket tournaments. Sports have played a key
                role in developing my teamwork, discipline, and competitive
                mindset.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                 
                  
                  boxShadow:
                    "0 10px 20px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)",
                }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] border border-orange-200 dark:border-orange-800 text-center hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>

                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
