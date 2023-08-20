import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import '../Landingcss/footer.css';
const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer-sec1">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-sec2">
      
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>EmpowerSkill@gmail.com</span>
          <span>Empower@gmail.com</span>

        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
