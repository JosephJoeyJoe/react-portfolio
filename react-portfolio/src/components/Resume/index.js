import React from "react";
import Button from 'react-bootstrap/Button'
function Resume() {
  return (
    <div className="resume">
      <div className="container">
      <Button href="https://docs.google.com/document/d/1nw3pYSSdmz6wnnbOpNNc4foQV0F6myiL/edit?usp=sharing&ouid=107581453191908377032&rtpof=true&sd=true" variant="outline-success">Click for Resume</Button>
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
