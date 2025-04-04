import React from "react";

const Profile = ({ formData, setFormData, errors }) => {
  const handleOnChange = (e) => {
    setFormData((prevSatte) => ({
      ...prevSatte,
      [e?.target?.name]: e?.target?.value,
    }));
  };
  return (
    <div>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={formData?.name} onChange={handleOnChange} />
        {errors?.name ? <span className="error">{errors?.name}</span>  : null}
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email" value={formData?.email} onChange={handleOnChange} />
        {errors?.email ? <span className="error">{errors?.email}</span> : null}
      </div>
    </div>
  );
};

export default Profile;
