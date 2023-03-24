import React, { useState, useEffect } from "react";
import { cards } from "./util/cardDeck";
import CardDeck from "./Components/CardDeck/CardDeck";
import shuffle from "./util/shuffle";
import Header from "./Components/Header/Header";
import style from "../src/App.module.css";

const App = () => {
  const [cardDeck, setCardDeck] = useState(cards);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showWinScreen, setShowWinScreen] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  useEffect(() => {
    const newDeck = shuffle([...cardDeck]);
    setCardDeck(newDeck);
  }, []);

  useEffect(() => {
    if (score === 8) {
      setShowWinScreen(true);
    }
  }, [score]);

  const handleScore = (card) => {
    if (clickedCards.includes(card)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
    }
  };

  const handleCardClick = (e) => {
    const cardValue = e.currentTarget.getAttribute("value");

    const newClickedCards = [...clickedCards];
    newClickedCards.push(cardValue);
    setClickedCards(newClickedCards);
    handleScore(cardValue);

    const newDeck = [...cardDeck];
    shuffle(newDeck);
    setCardDeck(newDeck);
  };

  const handleReset = () => {
    setScore(0);
    setClickedCards([]);
    setShowWinScreen(false);
    const newDeck = shuffle([...cardDeck]);
    setCardDeck(newDeck);
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <div className={style.container}>
        {showWinScreen ? (
          <div className={style.winScreen}>
            <h2>You won!</h2>
            <button onClick={handleReset}>Play again</button>
          </div>
        ) : (
          <CardDeck cards={cardDeck} clickHandler={handleCardClick} />
        )}
      </div>
    </div>
  );
};

export default App;
