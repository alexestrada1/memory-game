import React from "react";
import style from "./Card.module.css"
const Card = ({ character, clickHandler, img}) => {
    return(
        <div className={style.card} onClick={clickHandler} value={character}>
            <img
            alt={character} 
            src={img}></img>
            </div>
    )
}
export default Card