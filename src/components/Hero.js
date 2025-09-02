import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'React Developer',
        'Node.js Developer',
        'Problem Solver',
        'Tech Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const stats = [
    { label: 'Projects', value: '4+' },
    { label: 'Internships', value: '1' },
    { label: 'Technologies', value: '12+' },
    { label: 'DSA Problems', value: '300+' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Algoraver22', label: 'GitHub', color: '#333', shadowColor: 'rgba(51, 51, 51, 0.4)' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anurag-chaturvedi-b62a7024b/', label: 'LinkedIn', color: '#0077B5', shadowColor: 'rgba(0, 119, 181, 0.4)' },
    { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/user/ANURAG-SHIKHAR_4956/', label: 'GeeksforGeeks', color: '#0F9D58', shadowColor: 'rgba(15, 157, 88, 0.4)' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/ANURAG-SHIKHAR_4956/', label: 'LeetCode', color: '#FFA116', shadowColor: 'rgba(255, 161, 22, 0.4)' },
    { icon: FiCode, href: 'https://codolio.com/profile/Anurag_49_56', label: 'Codolio', color: '#6366F1', shadowColor: 'rgba(99, 102, 241, 0.4)' },
    { icon: FiMail, href: 'mailto:ak9656255@gmail.com', label: 'Email', color: '#EA4335', shadowColor: 'rgba(234, 67, 53, 0.4)' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm{' '}
            <motion.span 
              className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%',
                textShadow: '0 0 30px rgba(34, 197, 94, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)'
              }}
            >
              Anurag Chaturvedi
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-8"
          >
            I'm a <span ref={typedRef} className="text-primary-600 dark:text-primary-400"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
          >
            Passionate Computer Science student with expertise in MERN stack development and problem-solving. 
            Experienced MERN stack developer transitioning into DevOps and Cloud Computing, with a strong foundation in building scalable web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.6), 0 0 0 1px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(34, 197, 94, 0.3)",
                  "0 15px 40px rgba(16, 185, 129, 0.4)",
                  "0 10px 30px rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_25px_50px_rgba(34,197,94,0.6)] transition-all duration-500 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="relative z-10"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)"
                }}
                transition={{ duration: 0.3 }}
              >
                Hire Me
              </motion.span>
            </motion.a>
            
            <motion.a
              href="/resume/Anurag_Resume_1st.pdf"
              download
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                borderColor: "rgb(249, 115, 22)",
                color: "rgb(249, 115, 22)",
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4), 0 0 0 1px rgba(249, 115, 22, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-400 text-orange-600 dark:text-orange-400 rounded-2xl font-semibold shadow-[0_8px_25px_rgba(249,115,22,0.2)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.4)] transition-all duration-500 group"
            >
              <FiDownload className="mr-2" />
              <motion.span
                whileHover={{ 
                  textShadow: "0 0 15px rgba(249, 115, 22, 0.8), 0 0 25px rgba(249, 115, 22, 0.6)"
                }}
                transition={{ duration: 0.3 }}
              >
                Download Resume
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-start space-x-4 items-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  boxShadow: [
                    `0 5px 15px ${social.shadowColor.replace('0.4', '0.2')}`,
                    `0 8px 25px ${social.shadowColor.replace('0.4', '0.3')}`,
                    `0 5px 15px ${social.shadowColor.replace('0.4', '0.2')}`
                  ]
                }}
                transition={{
                  opacity: { delay: 1.1 + index * 0.1, ease: "easeOut" },
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  boxShadow: { duration: 2.5, repeat: Infinity, delay: index * 0.15, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.1
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl relative group"
                style={{
                  color: social.color,
                  boxShadow: `0 5px 15px ${social.shadowColor.replace('0.4', '0.2')}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = social.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.borderColor = '';
                }}
                title={social.label}
              >
                <social.icon size={20} />
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Photo & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative mt-4"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src="/assets/images/Profile.jpeg"
                  alt="Anurag Chaturvedi"
                  className="w-full h-full object-cover object-top scale-105"
                />
              </div>
            </div>
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-xl -z-10"
            />
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 w-full max-w-md"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
                transition={{
                  opacity: { delay: 0.9 + index * 0.1, ease: "easeOut" },
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
                className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_25px_rgba(59,130,246,0.15)] border border-orange-200 dark:border-orange-800 text-center group hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
