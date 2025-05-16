import React, { useRef, useState } from "react";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const GuessNumber = () => {
  const [number, setNumber] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [correctNumber, setCorrectNumber] = useState(getRandomNumber());
  const [response, setResponse] = useState("");
  const inputRef = useRef(null);

  const handleOnChange = (event) => setNumber(event.target.value);

  const handleGuessNumber = () => {
    const guess = parseInt(number, 10);

    if (isNaN(guess) || guess < 0 || guess > 100) {
      setResponse("Please enter a number between 1 and 100");
      return;
    }
    setAttempts((prevAttempts) => prevAttempts + 1);
    if (guess === correctNumber) {
      setResponse(
        `Congratulation you have guessed the number in ${attempts + 1} attempts`
      );
    } else if (number > correctNumber) {
      setResponse(`Too high, try again!`);
    } else {
      setResponse(`Too low, try again!`);
    }
    setNumber("");
  };

  const handleResetNumber = () => {
    setAttempts(0);
    setCorrectNumber(getRandomNumber());
    setResponse("");
    setNumber("");
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Guess Number</h1>
      <input
        type="number"
        placeholder="guess number"
        onChange={handleOnChange}
        value={number}
        ref={inputRef}
      />
      <p>{response}</p>
      <button onClick={handleGuessNumber}>Guess</button>
      <button onClick={handleResetNumber}>Reset</button>
    </div>
  );
};

export default GuessNumber;
