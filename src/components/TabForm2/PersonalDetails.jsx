import React from "react";

const PersonalDetails = ({ defaultValues }) => {
  const { name = "", email = "", password = "", phoneNo = "" } = defaultValues;

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" defaultValue={name} required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={email}
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNo">Phone No.</label>
        <input
          type="tel"
          name="phoneNo"
          defaultValue={phoneNo}
          id="phoneNo"
          maxLength={10}
          inputMode="numeric"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          defaultValue={password}
          id="password"
          required
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
