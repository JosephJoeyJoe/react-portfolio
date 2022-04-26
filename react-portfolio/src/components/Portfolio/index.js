import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [

    {  name: "Coin Press",
      description:
        "A web application with the purpose of bringing the latest cryptocurrency news to its users.",
      image: "coin-press.png",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/TrevorL0ng/Project-1-Crypto-Tracker",
      deployed: "https://trevorl0ng.github.io/Project-1-Crypto-Tracker/",
    },
    {
      name: "Robot Gladiators",
      description:
        "This application uses javascript to create a browser based fighting game.",
      image: "amazonaws-com-thumbnail.jpg",
      technologies: ["HTML", "JavaScript"],
      github: "https://github.com/JosephJoeyJoe/robot-gladiators",
      deployed: "https://josephjoeyjoe.github.io/robot-gladiators/",
    },
    {
      name: "Taskinator",
      description:
        "A simple kanban style progress app.",
      image: "taskinator.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JosephJoeyJoe/taskinator",
      deployed: "https://josephjoeyjoe.github.io/taskinator/",
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
    {  name: "Habit Social",
    description:
      "A habit tracker built with the MERN stack that connects people by encouraging each other's goals.",
    image: "Habit-Social.png",
    technologies: ["MERN", "GraphQL", "React Bootstrap"],
    github: "https://github.com/jmail1014/habit-social",
    deployed: "https://thawing-sea-89785.herokuapp.com/",
  },
  {
  name: "Case Tracker",
  description:
    "This application is a kanban for a company to use to track employee Covid cases.",
  image: "case-tracker-project.png",
  technologies: [
    "Node.js",
    "Express.js",
    "Handlebars.js",
    "MySQL and Sequelize ORM",
    "Heroku and Express-session",
  ],
  github: "https://github.com/JosephJoeyJoe/Case-Tracker",
  deployed: "https://fathomless-cliffs-14331.herokuapp.com/",
}
    
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
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
          </ul>
          <ul className="flex-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
