import React from "react";
import style from "./CardDeck.module.css";
import Card from "../Card/Card";
const CardDeck = ({ cards, clickHandler }) => {
  return (
    <div className={style.cardlayout}>
      {cards.map((card) => {
        return (
          <Card key={card.id} number = {card.number} clickHandler = {clickHandler} 
          />
        );
      })}
    </div>
  );
};
export default CardDeck;
