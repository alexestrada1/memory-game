import React from "react";
import style from "./CardDeck.module.css";
import Card from "../Card/Card";
const CardDeck = ({ cards, clickHandler }) => {
  return (
    <div className={style.cardlayout}>
      {cards.map((card) => {
        return (
          <Card key={card.id} character = {card.character} clickHandler = {clickHandler} img = {card.img} 
          />
        );
      })}
    </div>
  );
};
export default CardDeck;
