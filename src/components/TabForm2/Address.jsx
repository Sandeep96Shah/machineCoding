import React from "react";

const Address = ({ defaultValues = {} }) => {
  const { street = "", city = "", pincode = "", state = "" } = defaultValues;

  return (
    <div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          defaultValue={street}
          name="street"
          id="street"
          required
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input type="text" defaultValue={city} name="city" id="city" required />
      </div>

      <div>
        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          defaultValue={pincode}
          name="pincode"
          id="pincode"
          required
        />
      </div>
      <div>
        <label htmlFor="state">state</label>
        <input
          type="text"
          defaultValue={state}
          name="state"
          id="state"
          required
        />
      </div>
    </div>
  );
};

export default Address;
