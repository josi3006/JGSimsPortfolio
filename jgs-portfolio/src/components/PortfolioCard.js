import React from "react";

function PortfolioCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <a href="props.url"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img className="img-max img-port" alt={props.name} src={props.image} />
                </a>
            </div>
            <div className="content">
        <ul>
          <li>
            Name: {props.name}
          </li>
          <li>
            Link: {props.url}
          </li>
          
        </ul>
      </div>
        </div>

    );
}

export default PortfolioCard;