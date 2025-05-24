import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Blood-Donation",
      description: "A web application for blood donation management Using React.",
      link: "https://github.com/VARSHA-442/Blood-Donation"
    },
    {
      title: "Stock-Project",
      description: "Built a stock info website using HTML, CSS, and JavaScript.",
      link: "https://github.com/VARSHA-442/Stock-Project"
    },
    {
      title: "TO-DO-LIST",
      description: "Developed a to-do list application using React.",
      link: "https://github.com/VARSHA-442/to-do-list"
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
