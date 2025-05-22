import React from "react";

const Preference = ({ defaultValues = {} }) => {
  const { worktype = "" } = defaultValues;

  return (
    <div>
      <label htmlFor="worktype">Work Type:</label>
      <select name="worktype" id="worktype" defaultValue={worktype}>
        <option value="wfo">WFO</option>
        <option value="wfh">WFH</option>
        <option value="hybrid">Hybrid</option>
      </select>
    </div>
  );
};

export default Preference;
