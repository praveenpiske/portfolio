import React from 'react';

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-500 flex justify-between items-center flex-wrap gap-5">
      {/* Terms and Conditions */}
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-3">
      <div className="social-icon">
        <a
          href="https://github.com/praveenpiske"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src="assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
      </div>
      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/praveen-piske-24135022b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src="assets/linkedin.png" alt="LinkedIn" className="w-1/2 h-1/2" />
          </a>
      </div>
      <div className="social-icon">
        <a
          href="https://www.instagram.com/praveenpiske/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src="assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
          </a>
      </div>
      </div>
      <p className='text-white-500 '> © 2024 Praveen All rights reserved </p>
    </section>
  );
};

export default Footer;
