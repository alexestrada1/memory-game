import React from "react";
import style from "./Card.module.css"
const Card = ({ number, clickHandler}) => {
    return(
        <div className={style.card} onClick={clickHandler}>
            <h2>{number}</h2>
            </div>
    )
}
export default Card