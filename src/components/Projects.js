import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiGithub, FiExternalLink, FiCode, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Grid Optimization",
      period: "February 2025 - May 2025",
      category: "Machine Learning & Forecasting",
      description: "Advanced predictive modeling system for power load forecasting using California weather and power consumption datasets.",
      longDescription: "Developed sophisticated predictive models using California datasets on weather and power load, enhancing forecasting accuracy with the Prophet library in Python. The project involved comprehensive data preprocessing, including cleaning and merging time-series datasets to ensure data integrity for analysis. Integrated temperature and humidity regressors into models, significantly enhancing load forecasting precision and enabling accurate week-long load pattern predictions.",
      technologies: ["Python", "Prophet", "Pandas", "NumPy", "Time Series Analysis", "Weather APIs"],
      features: [
        "Predictive modeling with Prophet library",
        "Data preprocessing and time-series analysis",
        "Temperature and humidity integration",
        "Week-long load forecasting",
        "Weather pattern correlation analysis"
      ],
      impact: "Enhanced forecasting accuracy by 25% and enabled proactive grid management",
      icon: <FiTrendingUp />
    },
    {
      id: 2,
      title: "CES Impact - Environmental Health Prediction",
      period: "February 2024 - May 2024",
      category: "Data Science & Analytics",
      description: "Comprehensive analysis of environmental health indicators using CalEnviroScreen 3.0 dataset for California communities.",
      longDescription: "Analyzed CalEnviroScreen 3.0 dataset for environmental, demographic, and health indicators in California communities. Performed extensive EDA using correlation matrices to reveal relationships and conducted sophisticated feature engineering. Deployed and optimized multiple models including Linear Regression, Decision Trees, Random Forests, and XGBoost with hyperparameter tuning, evaluated via MSE and R-squared metrics.",
      technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn"],
      features: [
        "Exploratory Data Analysis (EDA)",
        "Feature engineering and selection",
        "Multiple ML model implementation",
        "Hyperparameter tuning",
        "Statistical evaluation and visualization"
      ],
      impact: "Provided actionable insights for environmental policy-making decisions",
      icon: <FiDatabase />
    },
    {
      id: 3,
      title: "Baltimore Crime Analysis",
      period: "October 2023 - December 2023",
      category: "Data Analytics & Visualization",
      description: "Multi-source data integration and analysis system for Baltimore crime patterns and trends identification.",
      longDescription: "Consolidated and merged multi-year, multi-source datasets including crime incidents, vacant notices, gun offenses, and vacant rehabs using unique identifiers and shared fields. Cleaned and standardized datasets, handling missing values and removing duplicates to ensure high data quality. Conducted advanced statistical analyses and designed compelling visualizations including heatmaps, scatter plots, and temporal trend lines.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistical Analysis", "Data Visualization"],
      features: [
        "Multi-source data integration",
        "Advanced data cleaning and standardization",
        "Statistical pattern analysis",
        "Interactive visualizations",
        "Temporal trend analysis"
      ],
      impact: "Informed stakeholders with actionable crime prevention strategies",
      icon: <FiCode />
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

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card glass-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <div className="project-period">
                      <FiCalendar />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-actions">
                  <button className="project-action">
                    <FiExternalLink />
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="project-modal"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <h3>{selectedProject.title}</h3>
                    <button 
                      className="modal-close"
                      onClick={() => setSelectedProject(null)}
                    >
                      ×
                    </button>
                  </div>

                  <div className="modal-content">
                    <div className="modal-meta">
                      <span className="modal-category">{selectedProject.category}</span>
                      <span className="modal-period">{selectedProject.period}</span>
                    </div>

                    <p className="modal-description">{selectedProject.longDescription}</p>

                    <div className="modal-section">
                      <h4>Key Features</h4>
                      <ul className="features-list">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section">
                      <h4>Technologies Used</h4>
                      <div className="modal-technologies">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="modal-tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-impact">
                      <h4>Impact</h4>
                      <p>{selectedProject.impact}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
