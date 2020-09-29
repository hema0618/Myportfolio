import React, { Component } from "react";
import items from "./items.js";
import Item from "./item";
import "./portfolio.css";

class Portfolio extends Component {
    state = {
        items
      };
    
    render() {
        return (
            <div>
            <div className="row px-4 mb-4 topic">
                <h3 className="pt-4 pb-3 ml-lg-5">PORTFOLIO</h3>
            </div> 
            <div className="row justify-content-center">
                {this.state.items.map(portItem => (
                    <Item
                    id={portItem.id}
                    key={portItem.id}
                    about={portItem.about}
                    github={portItem.github}
                    link={portItem.link}
                    name={portItem.name}
                    image={portItem.image}
                    />
                ))}
            </div>
            </div>
        );
    }
}

export default Portfolio;