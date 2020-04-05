import React from "react";
import { Link } from "react-router-dom";

// import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";

// function Contact(props) {



function Contact() {

  return (
    <div>

      <ul>
        <li>
          <Link to="https://www.linkedin.com/in/johngranvillesims"><img src="../../images/gitIcon.png" className='mr-3' alt="Github" />
            LinkedIn: John Granville Sims
        </Link>
        </li><li>

          <Link to="https://github.com/josi3006"><img src="../../images/gitIcon.png" className='mr-3' alt="Github" />
            GitHub: John Granville Sims
        </Link>

        </li><li>

          <Link to="mailto:JGSims@ProtonMail.com"><img src="../../images/gitIcon.png" className='mr-3' alt="Github" />
            Email: JGSims@ProtonMail.com
        </Link>
        </li><li>

          <Link to="tel:7037279467"><img src="../../images/gitIcon.png" className='mr-3' alt="Github" />
            Call: 703-727-9467
        </Link>
        </li></ul>

    </div>


  );
}



export default Contact;
