import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hobby from "./Hobby";
import Profile from "./Profile";
import Settings from "./Settings";
import "./tabForm.css";

const TabForm = () => {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hobby: [],
    setting: "dark",
  });
  const [errors, setErrors] = useState({});

  const tabList = [
    {
      name: "Profile",
      component: Profile,
      validation: () => {
        const errs = {};
        if (!formData?.name) {
          errs.name = "Name is required!";
        }
        if (!formData?.email) {
          errs.email = "Email is required!";
        }
        setErrors(errs);
        if (Object.keys(errs)?.length) return false;
        return true;
      },
    },
    {
      name: "Hobby",
      component: Hobby,
      validation: () => {
        const errs = {};
        if (!formData?.hobby?.length) {
          errs.hobby = "Atleast 1 hobby is required!";
        }
        setErrors(errs);
        if (Object.keys(errs)?.length) return false;
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const handleOnTabChange = (index) => {
    if (index < activeTab) setActiveTab(index);
    else if (tabList[activeTab].validation()) setActiveTab(index);
  };

  const CurrentTabComponent = tabList[activeTab].component;

  const handlePrevOnClick = () => {
    setActiveTab((prevState) => prevState - 1);
  };

  const handleNextOnClick = () => {
    if (tabList[activeTab].validation())
      setActiveTab((prevState) => prevState + 1);
  };

  const handleOnSubmit = () => {
    console.log({formData});
  }

  const handleBack = () => navigate(-1);

  return (
    <div>
        <button onClick={handleBack}>Home</button>
      <h1>Form Tab</h1>
      <div className="tab-form-container">
        {tabList.map((tab, index) => (
          <p
            key={index}
            onClick={() => handleOnTabChange(index)}
            className="each-tab"
          >
            {tab.name}
          </p>
        ))}
      </div>
      <div className="current-tab-body">
        {
          <CurrentTabComponent
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        }
      </div>
      {activeTab > 0 ? <button onClick={handlePrevOnClick}>Prev</button>: null}
      {activeTab < tabList?.length - 1 ? <button onClick={handleNextOnClick}>Next</button>: null}
      {activeTab === tabList.length - 1 ? <button onClick={handleOnSubmit}>Submit</button> : null}
    </div>
  );
};

export default TabForm;
