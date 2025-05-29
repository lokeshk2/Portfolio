import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiTool, 
  FiTrendingUp, 
  FiLayers,
  FiGitBranch,
  FiMonitor 
} from 'react-icons/fi';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode />,
      skills: [
        { name: "Python", level: 95, color: "#3776ab" },
        { name: "JavaScript", level: 90, color: "#f7df1e" },
        { name: "Java", level: 85, color: "#ed8b00" },
        { name: "C++", level: 80, color: "#00599c" },
        { name: "C", level: 75, color: "#a8b9cc" }
      ]
    },
    {
      title: "Web Development",
      icon: <FiMonitor />,
      skills: [
        { name: "React.js", level: 95, color: "#61dafb" },
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "HTML/CSS", level: 90, color: "#e34f26" },
        { name: "Redux", level: 80, color: "#764abc" },
        { name: "Ruby on Rails", level: 75, color: "#cc0000" }
      ]
    },
    {
      title: "Data Science & AI",
      icon: <FiTrendingUp />,
      skills: [
        { name: "Machine Learning", level: 90, color: "#ff6b6b" },
        { name: "Deep Learning", level: 85, color: "#4ecdc4" },
        { name: "TensorFlow", level: 80, color: "#ff6f00" },
        { name: "Scikit-Learn", level: 95, color: "#f7931e" },
        { name: "NLP", level: 85, color: "#45b7d1" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <FiDatabase />,
      skills: [
        { name: "PostgreSQL", level: 85, color: "#336791" },
        { name: "MySQL", level: 80, color: "#4479a1" },
        { name: "MongoDB", level: 75, color: "#47a248" },
        { name: "AWS", level: 70, color: "#ff9900" },
        { name: "Docker", level: 75, color: "#2496ed" }
      ]
    },
    {
      title: "Data Tools",
      icon: <FiLayers />,
      skills: [
        { name: "Pandas", level: 95, color: "#150458" },
        { name: "NumPy", level: 90, color: "#013243" },
        { name: "Matplotlib", level: 85, color: "#11557c" },
        { name: "Seaborn", level: 85, color: "#9b59b6" },
        { name: "Apache Spark", level: 75, color: "#e25a1c" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FiTool />,
      skills: [
        { name: "Git", level: 90, color: "#f05032" },
        { name: "Jenkins", level: 80, color: "#d33833" },
        { name: "Linux", level: 85, color: "#fcc624" },
        { name: "Jest", level: 85, color: "#c21325" },
        { name: "WDIO", level: 80, color: "#ea5906" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="skill-category glass-card"
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          variants={skillVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="skills-summary">
            <div className="summary-grid">
              <div className="summary-item glass-card">
                <FiCode className="summary-icon" />
                <h4>5+</h4>
                <p>Programming Languages</p>
              </div>
              <div className="summary-item glass-card">
                <FiDatabase className="summary-icon" />
                <h4>10+</h4>
                <p>Frameworks & Libraries</p>
              </div>
              <div className="summary-item glass-card">
                <FiCloud className="summary-icon" />
                <h4>3+</h4>
                <p>Cloud Platforms</p>
              </div>
              <div className="summary-item glass-card">
                <FiGitBranch className="summary-icon" />
                <h4>15+</h4>
                <p>Development Tools</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
