import React from "react";
import "./../App.css"; // Make sure to import the associated CSS for styling

const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I'm a <strong>Passionate Software Developer</strong> skilled in designing, developing, and deploying scalable software solutions that meet business needs and deliver exceptional user experiences. Check out some of my work in the <strong>Projects</strong> section.
              </p>
              <p className="about__content-details-para">
                I enjoy sharing knowledge and insights about <strong>Software Development</strong> through blogs and social media to support and inspire others in the tech community. Feel free to connect or follow me on{" "}
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/kamesh-pansare-728a01202"
                  target="_blank"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/pansare_kamesh123/"
                  target="_blank"
                >
                  Instagram
                </a>
                , where I post content related to programming, development best practices, and tech trends.
              </p>
              <p className="about__content-details-para">
                I'm actively seeking <strong>Job</strong> opportunities where I can apply my skills, tackle challenging problems, and grow alongside a dynamic team. If you have an exciting opportunity that aligns with my expertise, please don't hesitate to <strong>contact</strong> me.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">
              Contact
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Node.js</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">Python</div>
              <div className="skills__skill">Django</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">Express.js</div>
              <div className="skills__skill">Git</div>
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
