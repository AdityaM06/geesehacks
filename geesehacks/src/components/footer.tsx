import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <Link to="/" className="footer-link">
        <img src="/path/to/home-icon.png" alt="Home" className="footer-icon" />
      </Link>
      <Link to="/video" className="footer-link">
        <img src="/path/to/video-icon.png" alt="Video" className="footer-icon" />
      </Link>
    </footer>
  );
};

export default Footer;
