import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-content">
              <div className="glass-card">
                <h3 className="gradient-text">Profile</h3>
                <p>
                  Data Science graduate student with software development experience, 
                  specializing in advanced analytics, predictive modeling, and data 
                  visualization. Skilled in transforming complex datasets into actionable 
                  insights through innovative techniques and robust software solutions.
                </p>
                <p>
                  Adept at leveraging programming expertise to develop scalable, efficient 
                  systems that drive business value and support strategic decision-making. 
                  Passionate about using data to solve real-world problems and create 
                  meaningful impact.
                </p>

                <div className="contact-info">
                  <div className="contact-card">
                    <div className="contact-icon-wrapper">
                      <FiMapPin className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">Baltimore, MD</span>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <a 
                    href="https://linkedin.com/in/settylokesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-card social-link linkedin"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn: @settylokesh"
                  >
                    <div className="contact-icon-wrapper">
                      <FiLinkedin className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">LinkedIn</span>
                      <span className="contact-value">@settylokesh</span>
                    </div>
                  </a>
                  <a 
                    href="https://github.com/settylokesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-card social-link github"
                    aria-label="GitHub Profile"
                    title="GitHub: @settylokesh"
                  >
                    <div className="contact-icon-wrapper">
                      <FiGithub className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">GitHub</span>
                      <span className="contact-value">@settylokesh</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="education-timeline">
              <h3 className="gradient-text">Education</h3>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <h4>Master of Science in Data Science</h4>
                      <span className="timeline-date">Aug 2023 - May 2025</span>
                    </div>
                    <p className="timeline-institution">University of Maryland Baltimore County</p>
                    <p className="timeline-gpa">GPA: 3.9/4.00</p>
                    <div className="coursework">
                      <strong>Coursework:</strong>
                      <ul>
                        <li>Intro to Data Science</li>
                        <li>Data Management</li>
                        <li>Data Analysis and Machine Learning</li>
                        <li>Big Data Processing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <h4>B.Tech in Electronics and Communication Engineering</h4>
                      <span className="timeline-date">July 2018 - April 2022</span>
                    </div>
                    <p className="timeline-institution">KL University</p>
                    <p className="timeline-gpa">GPA: 9.1/10.00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="achievements">
            <h3 className="gradient-text">Leadership & Activities</h3>
            <div className="achievements-grid">
              <div className="achievement-item glass-card">
                <h4>T-Tribe Workshops</h4>
                <p>Participated in T-Hub Initiative workshops focusing on entrepreneurship and innovation</p>
              </div>
              <div className="achievement-item glass-card">
                <h4>Workshop Organizer</h4>
                <p>Organized and managed a workshop on Raspberry Pi and Robotics with 100+ participants</p>
              </div>
              <div className="achievement-item glass-card">
                <h4>Community Volunteer</h4>
                <p>Actively volunteered at Srishti 2k19, contributing to community outreach and event execution</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
