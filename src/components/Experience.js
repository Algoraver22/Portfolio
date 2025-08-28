import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Web Developer',
      company: 'Certify Technology',
      duration: 'Jun 2025 – Jul 2025',
      description: [
        'Built a real-time issue reporting dashboard with instant feedback and smooth form validation',
        'Implemented backend system to securely capture and store feedback with timestamps and user details',
        'Optimized performance through structured state management and error handling'
      ],
      certificateLink: 'https://drive.google.com/file/d/12elAWpdN_swU4Iir5cF1lC6kuaS_XO1d/view'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Information Technology',
      institution: 'KIET Group Of Institutions, Ghaziabad',
      duration: 'Sept 2022 – Jun 2026',
      cgpa: '8.4/10',
      details: 'Affiliated to AKTU'
    },
    {
      degree: 'Senior Secondary',
      institution: 'BSS Education Centre, Kanpur',
      duration: 'Apr 2020 – Apr 2021',
      cgpa: '94%'
    },
    {
      degree: 'High School',
      institution: 'Dr. VSPS Cantt, Kanpur',
      duration: 'Apr 2018 – Apr 2019',
      cgpa: '94%'
    }
  ];

  const certifications = [
    {
      name: 'Certified Full-Stack Web Developer',
      year: '2024',
      link: 'https://pdfhost.io/v/uGUR4xuMY8_CertificateOfCompletion_Become_a_FullStack_Web_Developer__1_-2'
    },
    {
      name: 'C++ Programming Certification',
      year: '2024',
      link: 'https://pdfhost.io/v/D5eTst6gSs_1-127d15db-7179-48ca-b07d-924682333066'
    },
    {
      name: 'INNOTECH KIET Participation',
      year: '2024',
      link: 'https://pdfhost.io/v/7x6fTYh22U_WhatsApp_Image_2025-06-15_at_16_06_26__1_'
    },
    {
      name: 'College Basketball Team Representative',
      year: '2024',
      link: 'https://pdfhost.io/v/nGPfTwdSUP_WhatsApp_Image_2025-06-15_at_22_52_54__1_'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience & Education */}
          <div className="space-y-8">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiBriefcase className="mr-3 text-primary-600" />
                Work Experience
              </h3>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] border border-orange-200 dark:border-orange-800 group hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500 mb-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm font-bold bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">
                        {exp.duration}
                      </span>
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.certificateLink && (
                    <motion.a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.08, 
                        y: -3,
                        boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-[0_8px_25px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_30px_rgba(34,197,94,0.4)] transition-all duration-300 text-sm mt-2"
                    >
                      <FiExternalLink className="mr-2" size={14} />
                      <motion.span
                        whileHover={{ 
                          textShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        View Certificate
                      </motion.span>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiBook className="mr-3 text-primary-600" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] border border-orange-200 dark:border-orange-800 group hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500 mb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-bold bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">
                        {edu.duration}
                      </span>
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Score: {edu.cgpa}</span>
                    {edu.details && <span>{edu.details}</span>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <FiAward className="mr-3 text-primary-600" />
              Certifications & Achievements
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] border border-orange-200 dark:border-orange-800 group hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.year}
                      </p>
                    </div>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Accomplishments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Accomplishments
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                  Solved 300+ Data Structures and Algorithms problems on LeetCode & GFG
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                  1st position in North-Zone Basketball Tournament (2019)
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                  Runner-up in South-Zone Basketball Tournament (2019)
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                  College basketball team representative
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;