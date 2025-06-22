import React, { useEffect, useState } from "react";
import { list } from "./data";
import Guess from "./Guess";
import "./styles.css";

const GuessWord = () => {
  const [correctWord, setCorrectWord] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const guessChances = new Array(6).fill("");

  const handleCurrentAttempt = (word) => {
    if (word === correctWord) setIsCorrect(true);
    else setCurrentAttempt((prevAttempt) => prevAttempt + 1);
  };

  useEffect(() => {
    const word = list[Math.floor(Math.random() * list.length)];
    setCorrectWord(word);
  }, []);

  useEffect(() => {
    if (isCorrect) {
      alert(`You have guessed the word in ${currentAttempt + 1} attempts`);
    }
  }, [isCorrect, currentAttempt]);

  console.log(correctWord);
  return (
    <div>
      {guessChances.map((_, index) => (
        <Guess
          key={index}
          currentAttempt={currentAttempt}
          correctWord={correctWord}
          nthAttempt={index}
          handleCurrentAttempt={handleCurrentAttempt}
          isCorrect={isCorrect}
        />
      ))}
    </div>
  );
};

export default GuessWord;
