import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMapPin, 
  FiLinkedin, 
  FiGithub
} from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Baltimore, MD",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/settylokesh",
      color: "#0077b5",
      handle: "@settylokesh",
      description: "Connect professionally"
    },
    {
      icon: <FiGithub size={20} />,
      name: "GitHub",
      url: "https://github.com/settylokesh",
      color: "#333",
      handle: "@settylokesh", 
      description: "View my code"
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
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>

          <motion.p variants={itemVariants} className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about data science and technology. Feel free to reach out!
          </motion.p>

          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <h3 className="gradient-text">Contact Information</h3>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item glass-card">
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4>Connect With Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--hover-color': social.color }}
                      title={`${social.name}: ${social.handle}`}
                    >
                      <div className="social-icon">
                        {social.icon}
                      </div>
                      <div className="social-content">
                        <span className="social-name">{social.name}</span>
                        <span className="social-handle">{social.handle}</span>
                        <span className="social-description">{social.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="availability-card glass-card">
                <h4>Availability</h4>
                <div className="availability-status">
                  <div className="status-indicator available"></div>
                  <span>Available for new opportunities</span>
                </div>
                <p>Currently seeking full-time opportunities in Data Science and Software Development</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
