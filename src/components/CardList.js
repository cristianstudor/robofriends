import React from "react";
import Card from "./Card.js";

const CardList = (props) => {
  const { robots } = props;
  const cardsArray = robots.map( (robot, i) => {
    return (<Card 
        key={i} 
        id={robot.id} 
        name={robot.name} 
        email={robot.email}
      />)
  })
    return (
      <div>
        {cardsArray}
      </div>
    )
}

export default CardList;
