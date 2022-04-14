import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>About me</h1>
        <img src={require("../../assets/img/profile-pic.jpg")} alt="profile-pic" />
        <p>Hello, I am Joseph Burns.</p>
        <p>
        I am a former Police Detective with a love for technology that has decided to take a creative journey into software development. After a successful 11 years in Law Enforcement and Protective Services Industry, I decided to try out the Computer Coding Bootcamp at UNC Charlotte.
        </p>
      </div>
    </div>
  );
}

export default About;
