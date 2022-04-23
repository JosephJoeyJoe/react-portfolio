import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>About me</h1>
        <img className="profile-pic" src={require("../../assets/img/images/profile-pic.jpg")} alt="profile-pic" />
        <p>Hello, I am Joseph "Joey" Whitaker.</p>
        <p>
        I am a former Police Detective with a love for technology. After a successful 11 years in Law Enforcement and Protective Services Industry, I changed gears and decided to take my personal hobby of web development and turn it into a career. I am a fast learner and am passionate about my work. I seek to create clean and productive applications that users love.
        </p>
      </div>
    </div>
  );
}

export default About;
