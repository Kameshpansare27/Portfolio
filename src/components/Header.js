import React, { useState } from "react";
import "./../App.css"; // Importing CSS file for styling

// Importing images directly
import logoImg from "./../../src/assets/images/kamesh.jpg";
import hamMenuIcon from "./../../src/assets/images/ham-menu.svg";
import hamMenuCloseIcon from "./../../src/assets/images/ham-menu-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks if the menu is open or closed
  const [isHamMenuVisible, setIsHamMenuVisible] = useState(true); // Controls visibility of the hamburger and close icons

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsHamMenuVisible(!isHamMenuVisible); // Toggle between hamburger and close icons
  };

  // Handle logo click to navigate to the homepage
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  // Close the mobile menu and show the hamburger icon
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsHamMenuVisible(true);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div
          className="header__logo-container"
          onClick={handleLogoClick} // Navigate to homepage when logo is clicked
          style={{ cursor: "pointer" }}
        >
          <div className="header__logo-img-cont">
  <img
    src={logoImg}
    alt="Kamesh Pansare logo"
    className="header__logo-img"
  />
</div>

          <span className="header__logo-sub">Kamesh Pansare</span>
        </div>

        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a
                href="./"
                className="header__link"
                onClick={closeMenu} // Close menu on link click
              >
                Home
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="./#about"
                className="header__link"
                onClick={closeMenu} // Close menu on link click
              >
                About
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="./#projects"
                className="header__link"
                onClick={closeMenu} // Close menu on link click
              >
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="./#experience"
                className="header__link"
                onClick={closeMenu} // Close menu on link click
              >
                Experience
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="./#contact"
                className="header__link"
                onClick={closeMenu} // Close menu on link click
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src={hamMenuIcon}
              alt="hamburger menu"
              className={`header__main-ham-menu ${isHamMenuVisible ? "" : "d-none"}`}
            />
            <img
              src={hamMenuCloseIcon}
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${isHamMenuVisible ? "d-none" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Conditional Rendering for Mobile Menu */}
      {isMenuOpen && (
        <div className="header__sm-menu header__sm-menu--active">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link" onClick={closeMenu}>
                <a href="./">Home</a>
              </li>
              <li className="header__sm-menu-link" onClick={closeMenu}>
                <a href="./#about">About</a>
              </li>
              <li className="header__sm-menu-link" onClick={closeMenu}>
                <a href="./#projects">Projects</a>
              </li>
              <li className="header__sm-menu-link" onClick={closeMenu}>
                <a href="./#experience">Experience</a>
              </li>
              <li className="header__sm-menu-link" onClick={closeMenu}>
                <a href="./#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
