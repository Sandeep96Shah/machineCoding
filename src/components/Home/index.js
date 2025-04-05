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
    </div>
  );
};

export default Home;
