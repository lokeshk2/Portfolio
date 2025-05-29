import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email using EmailJS or similar service
    setFormStatus('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "lokeshsetty10@gmail.com",
      link: "mailto:lokeshsetty10@gmail.com"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+1 (667) 406-7989",
      link: "tel:+16674067989"
    },
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
      color: "#0077b5"
    },
    {
      icon: <FiGithub size={20} />,
      name: "GitHub",
      url: "https://github.com/settylokesh",
      color: "#333"
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
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--hover-color': social.color }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
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

            <motion.div variants={itemVariants} className="contact-form-container">
              <div className="contact-form glass-card">
                <h3 className="gradient-text">Send Message</h3>
                
                {formStatus && (
                  <div className="form-status">
                    {formStatus}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="input-group">
                      <FiUser className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <FiMail className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <FiMessageSquare className="input-icon" />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group textarea-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    <FiSend />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
