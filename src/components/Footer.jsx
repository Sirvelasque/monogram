import React from 'react';
import '../css/Footer.css'; // Import your CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="project-footer">
      <div className="footer-content">
        <ul className="footer-links">
          {/* Add links to your portfolio, social media, etc. */}
          <li><a href="https://www.wix.com/blog/best-portfolio-websites">Portfolio</a></li>
          <li><a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme">GitHub</a></li>
          <li><a href="https://www.linkedin.com/profile/preview?locale=en_US">LinkedIn</a></li>
        </ul>

        <p className="technologies">Built with React.js and [Other Technologies Used]</p>

        <p className="acknowledgements">Thanks to [Tutorials/Resources Used]</p>

        <p className="copyright">
          © {currentYear} [Your Name]
        </p>
      </div>
    </footer>
  );
};

export default Footer;