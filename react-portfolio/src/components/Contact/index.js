import React from "react";
import Button from "react-bootstrap/Button";


function Contact() {
  

  return (
    <div className="contact shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
     <div className="container">
        <h1>Contact me</h1>
        <div className="d-grid gap-2"><Button href="mailto: joseph-burns@outlook.com" variant="outline-success">Email Me</Button>
        <Button href="tel:702-677-2653" variant="outline-success">Call or text at 702-677-2653</Button></div>
      </div>
    </div>
  );
}

export default Contact;



