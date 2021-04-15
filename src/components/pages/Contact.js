import React from "react";
// import { Link } from "react-router-dom";

// import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";

// function Contact(props) {



function Contact() {

  return (

    <div className="container">

      <div className="row mt-5 mb-5">
        <div className="col-md-12 h5">I'd love to hear from you.  Please reach out using my info...</div>
      </div>

      <div className="row mt-5">

        <div className="col-md-2">

        </div>

        <div className="cold-md-10">

          <a href='https://www.linkedin.com/in/johngranvillesims'
            target='_blank'
            rel="noopener noreferrer">
            <img src='../../images/LinkedIn.png'
              className='mr-3'
              alt="LinkedIn" />LinkedIn: John Granville Sims</a>

        </div>


      </div>

      <div className="row mt-5">

        <div className="col-md-2">

        </div>

        <div className="cold-md-10">

          <a href='https://github.com/josi3006'
            target='_blank'
            rel="noopener noreferrer">
            <img src='../../images/gitIcon.png'
              className='mr-3'
              alt="Github" />GitHub: John Granville Sims</a>

        </div>

      </div>

      <div className="row mt-5">

        <div className="col-md-2">
        </div>

        <div className="cold-md-10">


          <a href='mailto:JohnGranvilleSims@gmail.com'
            target='_blank'
            rel="noopener noreferrer">
            <img src='../../images/emailIcon.png'
              className='mr-3'
              alt="Email" />Email: JGSims@ProtonMail.com</a>

        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-2">
        </div>

        <div className="cold-md-10">


          <a href='tel:7037279467'
            target='_blank'
            rel="noopener noreferrer">
            <img src='../../images/callIcon.png'
              className='mr-3'
              alt="Call Me Maybe" />Call: 703-727-9467</a>

        </div>
      </div>

    </div>


  );
}



export default Contact;
