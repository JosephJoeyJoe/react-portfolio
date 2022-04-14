import React from "react";

function Resume() {
  return (
    <div className="resume">
      <div className="container">
        <p>
          <a
            href="https://www.dropbox.com/s/ileb0t45yj11ncr/Joseph%20Bruce%20Burns.docx?dl=0"
            target="_blank"
            rel="noreferrer"
          >
            Resume Here
          </a>
        </p>
        <h3>Front-End Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>responsive design</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
        </ul>
        <h3>Back-End Skills</h3>
        <ul>
          <li>mySQL, Sequilize</li>
          <li>MangoDB, Mongoose</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
          <li>REST</li>
          <li>APIs</li>
        </ul>
        <h3>Other Skills</h3>
        <ul>
          <li>Git</li>
          <li>Chrome DevTools</li>
          <li>Commandline</li>
          <li>Agile</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
