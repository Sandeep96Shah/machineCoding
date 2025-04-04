import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const otpCount = 6;
  const [inputList, setInputList] = useState(new Array(otpCount).fill(""));
  const inputListRef = useRef([]);
  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const trimmedValue = value?.trim();
    const updatedInputList = [...inputList];
    updatedInputList[index] = trimmedValue?.slice(-1);
    setInputList(updatedInputList);
    trimmedValue && inputListRef.current[index + 1]?.focus();
  };

  const handleOnBack = (e, index) => {
    if (!e.target.value && e?.key === "Backspace")
      inputListRef.current[index - 1]?.focus();
  };

  useEffect(() => {
    inputListRef.current[0]?.focus();
  }, []);

  const handleBack = () => navigate(-1);

  return (
    <div>
      <button onClick={handleBack}>Home</button>
      <h1>OTP</h1>
      {inputList?.map((input, index) => (
        <input
          key={index}
          type="text"
          value={inputList[index]}
          className="otpInput"
          onChange={(e) => handleOnChange(e?.target?.value, index)}
          ref={(input) => (inputListRef.current[index] = input)}
          onKeyDown={(e) => handleOnBack(e, index)}
        />
      ))}
    </div>
  );
};

export default OTP;
