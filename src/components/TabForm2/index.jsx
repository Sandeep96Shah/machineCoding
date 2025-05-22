import React, { useCallback, useRef, useState } from "react";
import Address from "./Address";
import PersonalDetails from "./PersonalDetails";
import Preference from "./Preferences";
import "./tabForm2.css";

const getKey = (step) => {
  switch (step) {
    case 1:
      return "address";
    case 2:
      return "preference";
    default:
      return "personalDetails";
  }
};

const getDefaultValues = (step) => {
  const data = localStorage.getItem(getKey(step)) ?? "";
  if (!data) return {};
  return JSON.parse(data);
};

const TabForm2 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const maxStep = useRef(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    localStorage.setItem(getKey(currentStep), JSON.stringify(fields));
    maxStep.current = currentStep + 1;
    if (currentStep === 2) {
      const result = [0, 1, 2].map((key) => getDefaultValues(key));
      alert(JSON.stringify(result, null, 2));
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleOnTabClick = (step) => {
    if(step <= maxStep.current) setCurrentStep(step);
  }

  const renderStepComponent = () => {
    const props = {
      onSubmit: handleSubmit,
      defaultValues: getDefaultValues(currentStep),
      onPrev: handlePrev,
    };

    switch (currentStep) {
      case 0:
        return <PersonalDetails {...props} />;
      case 1:
        return <Address {...props} />;
      case 2:
        return <Preference {...props} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tab-container">
        {["Personal Details", "Address", "Preference"].map((tab, index) => (
          <p key={tab} onClick={() => handleOnTabClick(index)} className="tab">
            {tab}
          </p>
        ))}
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            {renderStepComponent()}
            <div>
              <button
                type="button"
                disabled={currentStep === 0}
                onClick={handlePrev}
              >
                Prev
              </button>
              <button type="submit">
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabForm2;
