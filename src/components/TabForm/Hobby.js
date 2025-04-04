import React from "react";

const Hobby = ({ formData, setFormData, errors }) => {
  const handleOnChange = (e) => {
    if (e?.target?.checked) {
      setFormData((prevState) => ({
        ...prevState,
        hobby: [...formData?.hobby, e?.target?.name],
      }));
    } else {
      setFormData((prevSatte) => ({
        ...prevSatte,
        hobby: formData?.hobby?.filter((name) => name !== e?.target?.name),
      }));
    }
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="coding"
          onChange={handleOnChange}
          checked={formData?.hobby?.includes("coding")}
        />
        <label>Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="music"
          onChange={handleOnChange}
          checked={formData?.hobby?.includes("music")}
        />
        <label>Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="reading"
          onChange={handleOnChange}
          checked={formData?.hobby?.includes("reading")}
        />
        <label>Reading</label>
      </div>
      {errors?.hobby ? <span className="error">{errors?.hobby}</span>  : null}
    </div>
  );
};

export default Hobby;
