import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, 
  SiTailwindcss, SiGit, SiPython, SiCplusplus, SiMysql,
  SiFirebase, SiExpress, SiRedux, SiHtml5, SiCss3,
  SiVisualstudiocode, SiPostman, SiNetlify, SiVercel, SiBootstrap, SiPowerbi, SiGithub, SiExcel
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C', icon: SiCplusplus, color: '#A8B9CC' },
         { name: 'SQL', icon: SiMysql, color: '#4479A1' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      ]
    },
  
     {
      title: 'Web Technologies',
      skills: [
        
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
       
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#339933' },
        { name: 'WebRTC', icon: SiReact, color: '#FF6C37' }, 
        { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
      ]
    },
    {
      title: 'Data Analysis Tools',
      skills: [
        { name: 'Excel', icon: SiExcel, color: '#217346' },
        { name: 'Power BI', icon: SiPowerbi, color: '#F2C811' },
        { name: 'Pandas', icon: FaPython, color: '#150458' },
        { name: 'NumPy', icon: FaPython, color: '#013243' },
        { name: 'Matplotlib', icon: FaPython, color: '#11557C' },
        { name: 'Seaborn', icon: FaPython, color: '#4C72B0' },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-dark-200/20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div 
          
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                boxShadow: "0 20px 40px rgba(59,130,246,0.35)"
              }}
              className="bg-gradient-to-br from-orange-50 to-pink-50
                         dark:from-gray-800 dark:to-gray-700
                         backdrop-blur-sm p-6 rounded-2xl
                         border border-orange-200 dark:border-orange-800
                         transition-all duration-500"
            >
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
                {category.title}
              </h3>

            <div 
                className="space-y-4 max-h-96 overflow-y-auto" 
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg
                               hover:bg-gray-100 dark:hover:bg-dark-200
                               transition-colors duration-200"
                  >
                    <skill.icon
                      size={24}
                      style={{ color: skill.color }}
                      className="flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Other Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Structures & Algorithms',
              'Full-Stack Development',
              'Responsive Design',
              'RESTful APIs',
              'Version Control',
              'Problem Solving',
              'Team Collaboration',
              'Agile Development'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900
                           text-primary-700 dark:text-primary-300
                           rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
