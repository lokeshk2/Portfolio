# Lokesh Setty - Data Science Portfolio

A modern, responsive portfolio website showcasing my journey as a Data Scientist and Software Engineer. Built with React.js and featuring smooth animations, interactive elements, and a professional design.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.com) <!-- Update with your actual URL -->

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Interactive Elements**: Framer Motion animations and Three.js 3D graphics
- **Contact Form**: Functional contact form with EmailJS integration
- **Performance Optimized**: Fast loading and smooth user experience
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript, HTML5, CSS3
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Form Handling**: EmailJS
- **Scroll Animations**: AOS (Animate On Scroll)
- **Development**: React Scripts, Create React App

## 📱 Sections

1. **Hero**: Introduction with animated elements
2. **About**: Personal background and journey
3. **Skills**: Technical skills with visual representations
4. **Experience**: Professional experience timeline
5. **Projects**: Portfolio of projects and achievements
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.js        # About section
│   ├── Contact.js      # Contact form
│   ├── Experience.js   # Professional experience
│   ├── Footer.js       # Footer component
│   ├── Hero.js         # Hero/landing section
│   ├── Navbar.js       # Navigation bar
│   ├── Projects.js     # Projects showcase
│   └── Skills.js       # Skills section
├── styles/             # CSS stylesheets
│   ├── About.css
│   ├── App.css
│   ├── Contact.css
│   ├── Experience.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── Navbar.css
│   ├── Projects.css
│   └── Skills.css
├── App.js              # Main App component
└── index.js            # Entry point
```

## 🎨 Customization

### Colors and Themes
- Update CSS custom properties in `src/styles/App.css`
- Modify gradient colors and animations as needed

### Content
- Update personal information in respective component files
- Add your own projects in `Projects.js`
- Modify experience details in `Experience.js`
- Update skills in `Skills.js`

### Contact Form
- Configure EmailJS in `Contact.js` with your service ID, template ID, and user ID
- Update social media links in `Footer.js`

## 📧 Contact Configuration

To set up the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/Contact.js`:
   ```javascript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const userId = 'your_user_id';
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Lokesh Setty**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Email: [Your Email Address]

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Framer Motion for smooth animations
- Three.js for 3D graphics capabilities
- All open-source contributors whose packages made this project possible

---

⭐ Star this repository if you found it helpful!