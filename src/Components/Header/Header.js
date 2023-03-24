import React from "react";
import style from "./Header.module.css"
const Header = ({score, highScore}) => {
  return (
    <div className={style.header}>
      <h1>South Park Character Memory Game</h1>

      <div className={style.scores}>
        <div className="highScore">HighScore: {highScore}</div>
        <div className="score">Score: {score}</div>
      </div>
    </div>
  );
};
export default Header
