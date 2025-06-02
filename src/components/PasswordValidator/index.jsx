import React, { useMemo, useState, useCallback } from "react";
import "./styles.css";

const validations = [
  { key: "isUpperCase", title: "At least one uppercase letter" },
  { key: "isLowerCase", title: "At least one lowercase letter" },
  { key: "isNumber", title: "At least one number" },
  { key: "isSpecialCharacter", title: "At least one special character" },
  { key: "isLongEnough", title: "At least 8 characters " },
];

const validatePassword = (password) => ({
  isUpperCase: /[A-Z]/.test(password),
  isLowerCase: /[a-z]/.test(password),
  isNumber: /[0-9]/.test(password),
  isSpecialCharacter: /[!@#$%^&*()]/.test(password),
  isLongEnough: password.length >= 8,
});

const PasswordValidator = () => {
  const [password, setPassword] = useState("");

  const validationResult = useMemo(
    () => validatePassword(password),
    [password]
  );

  const handleOnPasswordChange = useCallback(
    (event) => setPassword(event.target.value),
    []
  );

  const isSubmitDisabled = useMemo(
    () => validations.some(({ key }) => !validationResult[key]),
    [validationResult]
  );

  return (
    <div className="password-validator-container">
      <input
        type="password"
        defaultValue={password}
        onChange={handleOnPasswordChange}
      />
      <button disabled={isSubmitDisabled}>Submit</button>
      {validations.map(({ key, title }) => (
        <p
          key={key}
          className={`${validationResult[key] ? "present" : "absent"}`}
        >
          {title}
        </p>
      ))}
    </div>
  );
};

export default PasswordValidator;
