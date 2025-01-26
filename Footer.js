import React from 'react';
import './footer.css';
import video from './Video_Play.png';
import money from './Money_Recive.png';
import home from './Home_5.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-symbol">
      <img src={home} alt="Home Icon" />
        <img src={video} alt="Video Icon" />
        <img src={money} alt="Money Receive Icon" />
        
      </div>
    </div>
  );
}

export default Footer;
