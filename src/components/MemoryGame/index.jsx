import React, { useEffect, useState } from "react";
import { getCards } from "./constants";
import "./memoryGame.css";

const MemoryGame = () => {
  const [cards, setCards] = useState(getCards());
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const handleOnClick = (cardDetails) => {
    const updatedCards = [...cards];
    cards[cardDetails.id].isFlipped = true;
    setCards(updatedCards);
    if (!Object.keys(firstCard).length) setFirstCard(cardDetails);
    else setSecondCard(cardDetails);
  };

  const isBothCardSelected =
    Object.keys(firstCard).length && Object.keys(secondCard).length;

  useEffect(() => {
    if (isBothCardSelected) {
      setTimeout(() => {
        if (firstCard.number !== secondCard.number) {
          setCards((prevCards) => {
            prevCards[firstCard.id].isFlipped = false;
            prevCards[secondCard.id].isFlipped = false;
            return prevCards;
          });
        }
        setFirstCard({});
        setSecondCard({});
      }, 3000);
    }
  }, [firstCard, secondCard]);

  return (
    <div className="container">
      <div className="memory-game-container">
        {cards.map(({ id, number, isFlipped }, index) => (
          <div
            key={index}
            className="card"
            onClick={() =>
              !isFlipped &&
              !isBothCardSelected &&
              handleOnClick({ id, number, isFlipped })
            }
          >
            {isFlipped ? <p>{number}</p> : <p>?</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
