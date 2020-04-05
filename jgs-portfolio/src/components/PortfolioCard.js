import React from "react";

function PortfolioCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>url:</strong> {props.url}
            </li>
            
          </ul>
        </div>
       
      </div>
    );
  }
  
  export default PortfolioCard;