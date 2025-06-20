import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "A responsive portfolio website built with React to showcase projects and skills.",
      link: "https://github.com/VARSHA-442/portfolio"
    },
    {
      title: "AI-Health-Bot",
      description: "Developed a Streamlit app for symptom transcription, disease prediction.",
      link: "https://github.com/VARSHA-442/AI-Health-Bot"
    },
    {
      title: "Blood-Donation",
      description: "A web application for blood donation management Using React.",
      link: "https://github.com/VARSHA-442/Blood-Donation"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <h3 className="portfolio__title">{project.title}</h3>
            <p className="portfolio__desc">{project.description}</p>
            <a href={project.link} className="portfolio__button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
