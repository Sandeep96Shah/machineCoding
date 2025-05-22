import React from "react";

const Address = ({ defaultValues = {} }) => {
  const fields = [
    { name: "street", label: "Street" },
    { name: "city", label: "City" },
    { name: "pincode", label: "Pincode" },
    { name: "state", label: "State" },
  ];

  return (
    <div>
      {fields.map(({ name, label }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            type="text"
            defaultValue={defaultValues[name]}
            name={name}
            id={name}
            required
          />
        </div>
      ))}
    </div>
  );
};

export default Address;
