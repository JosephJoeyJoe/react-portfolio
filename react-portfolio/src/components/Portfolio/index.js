import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {  name: "Habit Social",
      description:
        "A habit tracker built with the MERN stack that connects people by encouraging each other's goals.",
      image: "Habit-Social.png",
      technologies: ["MERN", "GraphQL", "React Bootstrap"],
      github: "https://github.com/jmail1014/habit-social",
      deployed: "https://thawing-sea-89785.herokuapp.com/",
    },
    {  name: "Coin Press",
      description:
        "A web application with the purpose of bringing the latest cryptocurrency news to its users. This application features Application programming interfaces from coinlore.com and youtube.com.",
      image: "password-generator-project.png",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/jmail1014/habit-social",
      deployed: "https://thawing-sea-89785.herokuapp.com/",
    },
    {
      name: "Case Tracker",
      description:
        "This application is a kanban for a company to use to track employee Covid cases. The kanban is organized with cases under the catagories of pending and completed. The user will register login information and then be able to utilize the Kanban within the application.",
      image: "case-tracker-project.png",
      technologies: [
        "Node.js",
        "Express.js",
        "Handlebars.js",
        "MySQL and Sequelize ORM",
        "Heroku",
        "Express-session and cookies",
      ],
      github: "https://github.com/JosephJoeyJoe/Case-Tracker",
      deployed: "https://fathomless-cliffs-14331.herokuapp.com/",
    },
    {
      name: "Robot Gladiators",
      description:
        "This application uses javascript to creat a browser based fighting game.",
      image: "amazonaws-com-thumbnail.jpg",
      technologies: ["HTML", "JavaScript"],
      github: "https://github.com/afebre1027/food-drink-app",
      deployed: "https://afebre1027.github.io/food-drink-app/",
    },
    {
      name: "Portfolio",
      description:
        "A professional portfolio application using HTML and advanced CSS that showcases examples of web development work. The application is mobile responsive using flexbox and media queries with emphasis on the user interface.",
      image: "portfolio-project.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JosephJoeyJoe/Portfolio",
      deployed: "https://josephjoeyjoe.github.io/Portfolio/",
    },
    
    {
      name: "Password Generator",
      description:
        "A random password generator that uses JavaScript to prompt the user for criteria to generate a password for their use.",
      image: "password-generator-project.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JosephJoeyJoe/password-generator",
      deployed: "https://josephjoeyjoe.github.io/password-generator/",
    },
    
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
