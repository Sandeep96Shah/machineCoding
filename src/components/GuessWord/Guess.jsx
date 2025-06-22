import React, { useEffect, useRef, useState } from "react";

const Guess = ({
  currentAttempt,
  nthAttempt,
  correctWord,
  handleCurrentAttempt,
  isCorrect
}) => {
  const [word, setWord] = useState("");
  const inputRef = useRef(null);

  const wordLength = new Array(5).fill("");

  const handleOnChange = (event) => {
    const guessWord = event.target.value;
    if (guessWord.length <= 5 && guessWord.length > word.length)
      setWord(guessWord);
  };

  const checkCharacter = (index) => {
    const isCorrect = word?.[index] === correctWord[index];
    const isPresent = correctWord.includes(word?.[index]);
    return isCorrect ? "is-correct" : isPresent ? "is-present" : "";
  };

  useEffect(() => {
    if (word.length === 5 && currentAttempt === nthAttempt ) {
      handleCurrentAttempt(word);
    }
  }, [word, handleCurrentAttempt]);

  useEffect(() => {
    if (currentAttempt === nthAttempt && !isCorrect) {
      inputRef.current.focus();
    }
  }, [currentAttempt, nthAttempt]);
  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={handleOnChange}
        className="input-field"
        disabled={nthAttempt !== currentAttempt}
        ref={inputRef}
      />
      <div className="guess-word">
        {wordLength.map((_, index) => (
          <p key={index} className={`each-character ${checkCharacter(index)}`}>
            {word?.[index] ?? ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Guess;
