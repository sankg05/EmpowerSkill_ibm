import React, { useState } from 'react';
import '../Landingcss/navbar.css';
import '../Landingcss/home.css';
import {BiMenu} from 'react-icons/bi';
// import logo from './images/logo.png'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuOptions = [
    { text: 'Home', anchor: 'home' },
    { text: 'About', anchor: 'about' },
    { text: 'Courses', anchor: 'courses' },
    { text: 'Testimonials', anchor: 'testimonials' },
    { text: 'Contact', anchor: 'contact' },
  ];

  return (
    <nav className="nav-container">
      <div className="nav-logo-con">
        <img src="" alt="LOGO" />
      </div>
      <div className="nav-links-con">
        {menuOptions.map((item) => (
          <a key={item.text} href={`#${item.anchor}`}>
            {item.text}
          </a>
        ))}
        <button className="primary-button">SignUp</button>
      </div>

      <div className="nav-menu-con">
        <button className="secondary-button" onClick={toggleMenu}><BiMenu /></button>
      </div>
      <div className={`drawer ${openMenu ? 'open' : ''}`}>
        <div className="drawer-header">
          <button className="close-button secondary-button" onClick={toggleMenu}>
            &#x2716; {/* Unicode character for '✖' cross symbol */}
          </button>
        </div>
        <div className="drawer-menu-links">
            {menuOptions.map((item) => (
              <a onClick={toggleMenu} key={item.text} href={`#${item.anchor}`}>{item.text}</a>
            ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
