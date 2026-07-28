import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OTP_LENGTH = 6;
const OTPNEW = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const inputListRef = useRef([]);
  const navigate = useNavigate();

  const handleFocus = (index) => {
    if (index < 0 || index >= otp.length) return;
    inputListRef.current[index].focus();
  };

  const handleUpdateOtp = (index, value) => {
    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);
  };

  const handleOnChange = (e, index) => {
    let value = e.target.value;
    value = value.trim();
    if (!/^\d*$/.test(value)) return;
    value = value.slice(-1);
    handleUpdateOtp(index, value);
    if (value) {
      handleFocus(index + 1);
    }
  };

  const handleOnKeyDown = (e, index) => {
    switch (e.key) {
      case "Backspace":
        // to prevent default browser behaviour to call onChange.
        e.preventDefault();
        if (otp[index]) {
          handleUpdateOtp(index, "");
        } else {
          handleFocus(index - 1);
        }
        break;
      case "ArrowRight":
        handleFocus(index + 1);
        break;
      case "ArrowLeft":
        handleFocus(index - 1);
        break;
      default:
        break;
    }
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pasteData) return;

    const nextOtp = [...otp];

    pasteData.split("").forEach((value, index) => {
      nextOtp[index] = value;
    });

    setOtp(nextOtp);

    const lastInputIndex = pasteData.length - 1;
    handleFocus(lastInputIndex);
  };

  const handleBack = () => navigate(-1);

  useEffect(() => {
    inputListRef.current[0]?.focus();
  }, []);
  return (
    <div>
      <button onClick={handleBack}>Home</button>
      <h2>OTP Verification</h2>
      <p>Please enter the OTP sent to your email.</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            inputMode="numeric"
            autoComplete="one-time-code"
            aria-label={`OTP input ${index + 1}`}
            ref={(el) => (inputListRef.current[index] = el)}
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            onPaste={(e) => handleOnPaste(e)}
            style={{
              width: 45,
              height: 45,
              textAlign: "center",
              fontSize: "20px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPNEW;
