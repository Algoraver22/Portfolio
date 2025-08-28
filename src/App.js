import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function AppContent() {
  const { isDark } = useTheme();
  
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Algoraver22', label: 'GitHub', color: '#333' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anurag-chaturvedi-b62a7024b/', label: 'LinkedIn', color: '#0077B5' },
    { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/user/anurag5649/', label: 'GeeksforGeeks', color: '#0F9D58' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/ANURAG-SHIKHAR_4956/', label: 'LeetCode', color: '#FFA116' },
  ];
  
  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="py-6 px-4 border-t border-gray-200 dark:border-dark-200">
          <div className="max-w-7xl mx-auto text-center">
            <div className="h-4"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
