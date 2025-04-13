import React, { useEffect, useState } from "react";

const Address = ({ setCurrentStep }) => {
  const [defaultValues, setDefaultValues] = useState({});
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log({sandeep123: formData});
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("address", JSON.stringify(data));
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleOnPrev = () => setCurrentStep((prevStep) => prevStep - 1);

  useEffect(() => {
    const data = localStorage.getItem("address");
    const value = JSON.parse(data);
    console.log({ sandeep1: data, value });
    setDefaultValues(value);
  }, []);
  console.log({defaultValues});
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            defaultValue={defaultValues?.street}
            name="street"
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            defaultValue={defaultValues?.city}
            name="city"
            required
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            defaultValue={defaultValues?.state}
            name="state"
            required
          />
        </div>
        <div>
          <label htmlFor="zip">Zip</label>
          <input
            type="text"
            id="zip"
            defaultValue={defaultValues?.zip}
            name="zip"
            required
          />
        </div>

        <button onClick={handleOnPrev}>Prev</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Address;
