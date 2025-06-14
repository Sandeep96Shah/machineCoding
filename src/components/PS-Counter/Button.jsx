import React, { memo } from "react";

const Button = memo(({ onClick, label }) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
});

export default Button;
