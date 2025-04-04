import React from "react";

const Settings = ({ formData, setFormData }) => {
  const handleOnChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        setting: e.target.name
    }))
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          onChange={handleOnChange}
          checked={formData.setting === "dark"}
        />
        <label>Dark Theme</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          onChange={handleOnChange}
          checked={formData.setting === "light"}
        />
        <label>Light Theme</label>
      </div>
    </div>
  );
};

export default Settings;
