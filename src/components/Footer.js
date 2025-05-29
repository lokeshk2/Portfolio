import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiLinkedin size={20} />,
      url: "https://linkedin.com/in/settylokesh",
      name: "LinkedIn",
      handle: "@settylokesh",
      description: "Professional Network"
    },
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/settylokesh",
      name: "GitHub", 
      handle: "@settylokesh",
      description: "Code Repository"
    },
    {
      icon: <FiMail size={20} />,
      url: "mailto:settylokesh10@gmail.com",
      name: "Email",
      handle: "settylokesh10@gmail.com",
      description: "Direct Contact"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <motion.div 
                className="footer-brand"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="gradient-text">Lokesh Setty</h3>
                <p>Data Science Graduate Student & Software Developer</p>
                <p className="footer-description">
                  Passionate about transforming data into actionable insights and 
                  building innovative solutions that drive business value.
                </p>
              </motion.div>
            </div>

            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4>Contact Info</h4>
                <div className="contact-details">
                  <p>
                    <strong>Location:</strong>
                    <span>Baltimore, MD</span>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4>Connect With Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={`${social.name} - ${social.description}`}
                      title={`${social.name}: ${social.handle}`}
                    >
                      <div className="social-icon">
                        {social.icon}
                      </div>
                      <div className="social-info">
                        <span className="social-name">{social.name}</span>
                        <span className="social-handle">{social.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="newsletter">
                  <p>Let's connect and discuss opportunities!</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {currentYear} Lokesh Setty. Made with{' '}
                  <FiHeart className="heart-icon" /> using React.js
                </p>
              </div>
              
              <div className="footer-actions">
                <button 
                  className="scroll-to-top"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  <FiArrowUp />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="footer-bg">
        <div className="footer-particle particle-1"></div>
        <div className="footer-particle particle-2"></div>
        <div className="footer-particle particle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
