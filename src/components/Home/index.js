import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlenavigate = (to) => navigate(to);

  return (
    <div>
      <button onClick={() => handlenavigate("otp-input")}>OTP Input</button>
      <button onClick={() => handlenavigate("tab-form")}>Tab Form</button>
      <button onClick={() => handlenavigate("table-pagination")}>Table Pagination</button>
      <button onClick={() => handlenavigate("auto-complete")}>Auto Complete</button>
      <button onClick={() => handlenavigate("progress-bar")}>Progress Bar</button>
      <button onClick={() => handlenavigate("tab-form-1")}>Tab Form 1</button>
      <button onClick={() => handlenavigate("counter")}>Counter</button>
      <button onClick={() => handlenavigate("debounce-throttle")}>DebounceThrottle</button>
      <button onClick={() => handlenavigate("toast")}>Toast</button>
    </div>
  );
};

export default Home;
