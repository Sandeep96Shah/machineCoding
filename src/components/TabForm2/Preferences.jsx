import React from "react";

const Preference = ({ defaultValues = {} }) => {
  const { worktype = "" } = defaultValues;

  const worktypeOptions = [
    { value: "wfo", label: "WFO" },
    { value: "wfh", label: "WFH" },
    { value: "hybrid", label: "Hybrid" },
  ];

  return (
    <div>
      <label htmlFor="worktype">Work Type:</label>
      <select name="worktype" id="worktype" defaultValue={worktype}>
        {worktypeOptions.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default Preference;
