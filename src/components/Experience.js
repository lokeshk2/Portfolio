import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import '../styles/Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Engineer",
      company: "Cerner Corporation",
      location: "Bengaluru, India",
      period: "August 2022 - April 2023",
      type: "Full-time",
      responsibilities: [
        "Standardized UI components utilizing React best practices, ensuring consistency and reusability across the application",
        "Implemented WDIO test cases to validate UI changes, guaranteeing seamless functionality and compatibility",
        "Conducted thorough local testing, ensuring Jenkins build success and negligible impact on existing functionalities",
        "Collaborated in code reviews, incorporating feedback, and refining code quality",
        "Followed Agile methodologies and Scrum practices to ensure timely delivery of high-quality features"
      ],
      technologies: ["React.js", "JavaScript", "WDIO", "Jenkins", "Agile", "Scrum"]
    },
    {
      title: "Software Intern",
      company: "Cerner Corporation",
      location: "Bengaluru, India",
      period: "February 2022 - August 2022",
      type: "Internship",
      responsibilities: [
        "Built a full-stack application using React, Node.js, and PostgreSQL to enable user registration, login, and profile viewing",
        "Designed and deployed a scalable authentication system using React Context API and PostgreSQL, improving security and user access control",
        "Designed and validated user registration and login forms with real-time input validation for email and password fields",
        "Conducted comprehensive unit testing for each component using react-testing-library and Jest, achieving 100% functionality and 90% test coverage",
        "Collaborated with teams to troubleshoot issues and implement new features, improving code quality and reducing bugs"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Jest", "Enzyme", "React Context API"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Professional Experience
          </motion.h2>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="experience-item"
              >
                <div className="experience-marker">
                  <FiBriefcase />
                </div>
                
                <div className="experience-content glass-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{exp.title}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    
                    <div className="experience-meta">
                      <div className="experience-period">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                      <div className="experience-location">
                        <FiMapPin />
                        <span>{exp.location}</span>
                      </div>
                      <div className="experience-type">
                        <span className="type-badge">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-responsibilities">
                    <h5>Key Responsibilities & Achievements:</h5>
                    <ul>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="experience-summary">
            <div className="summary-card glass-card">
              <h3 className="gradient-text">Experience Summary</h3>
              <div className="summary-stats">
                <div className="summary-stat">
                  <h4>1+</h4>
                  <p>Year of Experience</p>
                </div>
                <div className="summary-stat">
                  <h4>Full-Stack</h4>
                  <p>Development</p>
                </div>
                <div className="summary-stat">
                  <h4>Agile</h4>
                  <p>Methodologies</p>
                </div>
                <div className="summary-stat">
                  <h4>90%+</h4>
                  <p>Test Coverage</p>
                </div>
              </div>
              <p>
                Proven track record in full-stack development with expertise in React.js, Node.js, 
                and modern testing frameworks. Strong experience in Agile environments with focus 
                on code quality, testing, and collaborative development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
