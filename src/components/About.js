import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
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
      </div>
    </section>
  );
};

export default About;
