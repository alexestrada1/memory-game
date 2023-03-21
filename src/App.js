import React, {useState, useEffect} from "react";
import CardDeck from "./Components/CardDeck/CardDeck";
import shuffle from "./Components/util/shuffle";
const App = () => {
  const [cardDeck, setCardDeck] = useState([{id: 1, number: 1}, {id: 2,number: 2}, {id: 3,number: 3}, {id: 4,number: 4}])

  const handleCardClick =() =>{
    const newDeck = [...cardDeck];
    shuffle(newDeck);
    setCardDeck(newDeck);
  }
  return (
    <div className="App"> 
      <CardDeck cards = {cardDeck} clickHandler={handleCardClick}/>
    </div>
  );
}

export default App;
