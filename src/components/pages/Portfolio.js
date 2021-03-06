// import React from "react";
import React, { Component } from "react";
import PortfolioCard from "../PortfolioCard";
import portfolio from "../portfolio.json";





class Portfolio extends Component {

  state = {
    portfolio
  };

  render() {
    return (

      <div className="wrapper">
      {this.state.portfolio.map(block => (
        <PortfolioCard
          id={block.id}
          key={block.id}
          name={block.name}
          image={block.image}
          url={block.url}
        />
      ))}

      </div>




  
)



  }


}

export default Portfolio;
