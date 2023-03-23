import React, { useState, useEffect } from "react";
import CardDeck from "./Components/CardDeck/CardDeck";
import shuffle from "./Components/util/shuffle";
import Score from "./Components/Score/Score";
const App = () => {
  const [cardDeck, setCardDeck] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
  ]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  useEffect(() => {
    const newDeck = shuffle([...cardDeck]);
    setCardDeck(newDeck);
  }, []);


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
  return (
    <div className="App">
      <Score score={score} highScore={highScore} />
      <CardDeck cards={cardDeck} clickHandler={handleCardClick} />
    </div>
  );
};

export default App;
