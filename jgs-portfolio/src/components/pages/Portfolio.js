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

      <span>
      {this.state.portfolio.map(block => (
        <PortfolioCard
          id={block.id}
          key={block.id}
          name={block.name}
          image={block.image}
          url={block.url}
        />
      ))}

      </span>




  
)



  }


}

export default Portfolio;
