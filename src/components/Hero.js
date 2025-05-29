import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiMail } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle system - reduce count on mobile
    const particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 50 : 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
        this.opacity = Math.random();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#667eea';
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections only on desktop for performance
      if (!isMobile) {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.globalAlpha = 0.1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = '#667eea';
              ctx.stroke();
            }
          });
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="hero-title">
                  Hi, I'm{' '}
                  <span className="gradient-text">Lokesh Setty</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="hero-subtitle">
                  Data Science Graduate Student & Software Developer
                </h2>
              </motion.div>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Specializing in advanced analytics, predictive modeling, and data visualization. 
                Skilled in transforming complex datasets into actionable insights through innovative 
                techniques and robust software solutions.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#contact" className="btn btn-primary">
                  <FiMail /> Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline">
                  <FiCode /> View Projects
                </a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="stat">
                  <h3>3.9</h3>
                  <p>GPA (MS Data Science)</p>
                </div>
                <div className="stat">
                  <h3>1+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </div>
              </motion.div>
            </div>

            <div className="hero-image">
              <motion.div
                className="image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="image-wrapper">
                  {!imageError ? (
                    <img src="/Lokesh-Setty.jpg" alt="Lokesh Setty" onError={handleImageError} />
                  ) : (
                    <div className="image-error">Image failed to load</div>
                  )}
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
