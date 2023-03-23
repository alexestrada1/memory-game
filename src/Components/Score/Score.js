import React from "react";

const Score = ({score, highScore}) => {
    return(
        <div className="scores">
            <div className="highScore">HighScore: {highScore}</div>
            <div className="score">Score: {score}</div>
        </div>
    )
}
export default Score