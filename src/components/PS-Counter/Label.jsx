import React, { memo } from "react";


const Label = memo(({ label }) => {
  console.log({ label });
  return <div>{label}</div>;
});

export default Label;
