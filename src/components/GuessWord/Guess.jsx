import React, { useEffect, useRef, useState } from "react";

const Guess = ({
  currentAttempt,
  nthAttempt,
  correctWord,
  handleCurrentAttempt,
}) => {
  const [word, setWord] = useState("");
  const inputRef = useRef(null);
  const isChecked = useRef(false);

  const wordLength = new Array(5).fill("");

  const handleOnChange = (event) => {
    const guessWord = event.target.value;
    // console.log(guessWord, word);
    if (guessWord.length <= 5) setWord(guessWord);
  };

  const checkCharacter = (index) => {
    const isCorrect = word?.[index] === correctWord[index];
    const isPresent = correctWord.includes(word?.[index]);
    return isCorrect ? "is-correct" : isPresent ? "is-present" : "";
  };

  useEffect(() => {
    if (word.length === 5 && !isChecked.current) {
      isChecked.current = true;
      handleCurrentAttempt(word);
    }
  }, [word, isChecked, handleCurrentAttempt]);

  useEffect(() => {
    if (currentAttempt === nthAttempt) {
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
