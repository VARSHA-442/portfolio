import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© {new Date().getFullYear()} Varsha Karada. All rights reserved.</p>
        <div className="footer__socials">
          <a href="https://github.com/VARSHA-442" target="_blank" rel="noopener noreferrer" className="footer__link">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/varsha-karada/" target="_blank" rel="noopener noreferrer" className="footer__link">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="mailto:karadavarsha222@gmail.com" className="footer__link">
            <i className='bx bx-envelope'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
