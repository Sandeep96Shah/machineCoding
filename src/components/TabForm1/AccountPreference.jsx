import React, { useEffect, useState } from "react";

const AccountPreference = ({ setCurrentStep }) => {
  const [defaultValues, setDefaultValues] = useState({});
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("notification", JSON.stringify(data));
    const personalDetails = JSON.parse(localStorage.getItem("personal"));
    const address = JSON.parse(localStorage.getItem("personal"));
    alert(
      `${personalDetails?.name}, ${personalDetails?.email}, ${personalDetails?.phone}, ${address?.street}, ${address?.city}, ${address?.state}, ${address?.zip}, ${data?.password}, ${data?.notification}`
    );
  };

  const handleOnPrev = () => setCurrentStep((prevStep) => prevStep - 1);

  useEffect(() => {
    const data = localStorage.getItem("notification");
    const value = JSON.parse(data);
    console.log({ sandeep1: data, value });
    setDefaultValues(value);
  }, []);
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            defaultValue={defaultValues?.password}
            name="password"
            required
          />
        </div>
        <div>
          <label htmlFor="notification">Notification</label>
          <select
            name="notification"
            id="notification"
            defaultValue={defaultValues?.notification}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button onClick={handleOnPrev}>Prev</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountPreference;
