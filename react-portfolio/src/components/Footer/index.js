import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="social-icon-container">
            <SocialIcon
              className="social-icon"
              url="https://github.com/JosephJoeyJoe"
              target="_blank"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.linkedin.com/in/joseph-whitaker-62a6a4218/"
              target="_blank"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
