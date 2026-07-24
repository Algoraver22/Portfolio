import React from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaCalculator,
  FaServer
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNextdotjs,
  SiPostman,
  SiNetlify,
  SiVercel
} from "react-icons/si";

import {
  FaPython,
  FaDatabase,
  FaMicrosoft,
  FaCode
} from "react-icons/fa";

const Skills = () => {

  const skillCategories = [

    {
  title: "Programming Languages",
  skills: [
    { name: "C", icon: SiCplusplus, color: "#5C6BC0" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
  ]
},

    {
  title: "Frontend Development",
  skills: [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  ]
},

   {
  title: "Backend Development",
  skills: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "REST APIs", icon: FaServer, color: "#7C3AED" },
    { name: "WebRTC", icon: FaCode, color: "#38BDF8" },
  ]
},

    {
  title: "Data Engineering",
  skills: [
    { name: "PySpark", icon: FaPython, color: "#3776AB" },
    { name: "Snowflake", icon: FaDatabase, color: "#29B5E8" },
    { name: "Pandas", icon: FaChartBar, color: "#130654" },
    { name: "NumPy", icon: FaCalculator, color: "#4D77CF" },
    { name: "Matplotlib", icon: FaChartBar, color: "#11557C" },
    { name: "Seaborn", icon: FaChartBar, color: "#4C72B0" },
  ]
},

    {
  title: "Databases, Tools & Cloud",
  skills: [
    { name: "Excel", icon: FaMicrosoft, color: "#217346" },
    { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "VS Code", icon: FaCode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
  ]
}

  ];
    return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 dark:bg-dark-200/20"
    >
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

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Technologies and tools I use for Full-Stack Development,
            Data Engineering and Data Analytics.
          </p>
        </motion.div>

        {/* Skill Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
              className="
                bg-gradient-to-br
                from-orange-50
                to-pink-50
                dark:from-gray-800
                dark:to-gray-700
                backdrop-blur-sm
                p-6
                rounded-2xl
                border
                border-orange-200
                dark:border-orange-800
                transition-all
                duration-500
                h-full
              "
            >

              <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-6 text-center">
                {category.title}
              </h3>

              <div
                className={
                  category.skills.length >= 7
                    ? "grid grid-flow-col grid-rows-6 gap-x-6 gap-y-3"
                    : "space-y-4"
                }
              >

                              {category.skills.map((skill, skillIndex) => (

                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay:
                        categoryIndex * 0.1 +
                        skillIndex * 0.05
                    }}
                    whileHover={{
                      scale: 1.03,
                      x: 4
                    }}
                    whileTap={{
                      scale: 0.97
                    }}
                    className="
                      flex
                      items-center
                      space-x-3
                      p-3
                      rounded-xl
                      cursor-default
                      hover:bg-gray-100
                      dark:hover:bg-gray-600/40
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-white
                        dark:bg-gray-900
                        shadow-sm
                      "
                    >

                      <skill.icon
                        size={22}
                        style={{
                          color: skill.color
                        }}
                      />

                    </div>

                    <span
                      className="
                        text-gray-700
                        dark:text-gray-200
                        font-medium
                      "
                    >
                      {skill.name}
                    </span>

                  </motion.div>

                ))}

                              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Skills;
