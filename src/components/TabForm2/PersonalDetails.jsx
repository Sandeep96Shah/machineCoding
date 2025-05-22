import React from "react";

const PersonalDetails = ({ defaultValues }) => {
  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    {
      name: "phoneNo",
      label: "phone No.",
      type: "tel",
      maxLength: 10,
      inputMode: "numeric",
    },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <div>
      {fields.map(({ name, label, type, ...rest }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValues[name]}
            {...rest}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;
