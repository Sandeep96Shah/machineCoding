import React, { useEffect, useState } from "react";

const Personal = ({ setCurrentStep }) => {
    const [defaultValues, setDefaultValues] = useState({});
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log({ sandeep1: data });
    localStorage.setItem("personal", JSON.stringify(data));
    setCurrentStep?.((prevStep) => prevStep + 1);
  };
//   const data = JSON.parse(localStorage.getItem("personal") ?? "");
//   console.log({sandeep1: data});

  useEffect(() => {
    const data = localStorage.getItem("personal")
    const value = JSON.parse(data)
    console.log({sandeep1: data, value});
    setDefaultValues(value)
  }, [])
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={defaultValues?.name}
            required
            minLength={5}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={defaultValues?.email}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            defaultValue={defaultValues?.phone}
            required
            minLength={10}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Personal;
