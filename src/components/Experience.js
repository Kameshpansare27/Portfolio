import React from "react";
import "./../App.css"; // Make sure to import the associated CSS for styling

const About = () => {
  return (
    <section id="experience" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Experience</span>
          <span className="heading-sec__sub">
          Here you will find some of my professional experience.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Software Developer</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
              <strong>10/2024 - Current, Mumbai, India</strong> </p>
              <p className="about__content-details-para">
              Delivered end-user training on content management systems, enabling staff to update and maintain websites independently.
              </p>
              <p className="about__content-details-para">
                Designed and implemented interactive user interfaces for websites and applications.
              </p>
              <p className="about__content-details-para">
                Integrated front-end code with server-side APIs to implement dynamic and interactive web pages.
              </p>
              <p className="about__content-details-para">
                Debugged existing code to identify and resolve bugs and performance issues.
              </p>
              <p className="about__content-details-para">
                Collaborated with back-end developers to integrate user interface elements into applications.
              </p>
            </div>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">Key Skills</h3>
            <div className="skills">
              <div className="skills__skill">React</div>
              <div className="skills__skill">Node.js</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">Python</div>
              <div className="skills__skill">GitHub</div>
              <div className="skills__skill">RESTful APIs</div>
              <div className="skills__skill">Problem Solving</div>
              <div className="skills__skill">Team Collaboration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
