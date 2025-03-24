import React from "react";
import "./../App.css"; // Import the associated CSS for styling

// Importing images directly
import linkedinIcon from "./../../src/assets/images/linkedin-dark.svg";
import twitterIcon from "./../../src/assets/images/twitter-dark.svg";
import youtubeIcon from "./../../src/assets/images/yt-dark.svg";
import githubIcon from "./../../src/assets/images/github-dark.svg";
import devIcon from "./../../src/assets/images/book-dark.svg";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, I'm Kamesh Pansare</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            A dedicated Software Developer focused on designing, developing, and
            maintaining high-performance software solutions. With a strong
            emphasis on problem-solving and collaboration, I create applications
            that drive innovation and deliver measurable results.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">
            Projects
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a
            href="https://www.linkedin.com/in/kamesh-pansare-728a01202"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="Kamesh Pansare Linkedin Profile"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://twitter.com"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={twitterIcon}
              alt="Twitter Profile"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.youtube.com/channel/UC8jb_CROHSxp3wKMdR6W-fQ"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={youtubeIcon}
              alt="Youtube Channel"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://github.com/Kameshpansare27"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={githubIcon}
              alt="Github Profile"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://dev.to"
            className="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={devIcon}
              alt="DEV.to Blog Profile"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>

      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default HomeHero;
