
import React from "react";
import "./../App.css"; // Importing CSS for styling
import portfolioImg from "./../../src/assets/images/crown-template.jpeg";
import flipkartImg from "./../../src/assets/images/dopefolio.jpeg";
import streamflixImg from "./../../src/assets/images/wilsonport.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PORTFOLIO",
      description:
        "A personal portfolio website showcasing my skills, experience, and projects.",
      image: portfolioImg,
      caseStudyLink: "https://github.com/Kameshpansare27/Portfolio.git",
    },
    {
      id: 2,
      title: "FLIPKART CLONE",
      description:
        "A clone of the popular e-commerce website Flipkart, built to demonstrate my skills in frontend development.",
      image: flipkartImg,
      caseStudyLink: "https://github.com/Kameshpansare27/Flipkart-clone.git",
    },
    {
      id: 3,
      title: "STREAMFLIX",
      description:
        "A clone of the popular streaming service Netflix, built to demonstrate my skills in frontend development and UI/UX design.",
      image: streamflixImg,
      caseStudyLink: "https://github.com/Kameshpansare27/StreamFlix.git",
    },
  ];

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you will find some of the personal and client projects that I
            created, with each project containing its own case study.
          </span>
        </h2>

        <div className="projects__content">
          {projects.map((project, index) => (
            <div
              className={`projects__row ${index % 2 === 0 ? "zebra-light" : "zebra-dark"}`}
              key={project.id}
            >
              <div className="projects__row-img-cont">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.title}</h3>
                <p className="projects__row-content-desc">
                  {project.description}
                </p>
                <a
                  className="btn btn--med btn--theme dynamicBgClr"
                  href={project.caseStudyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
