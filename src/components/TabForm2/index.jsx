import React, { useRef, useState } from "react";
import Address from "./Address";
import PersonalDetails from "./PersonalDetails";
import Preference from "./Preferences";
import "./tabForm2.css";

const STEP_COMPONENTS = [PersonalDetails, Address, Preference];
const STEP_KEYS = ["personalDetails", "address", "preference"];

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

const getDefaultValues = (stepKey) => {
  const data = localStorage.getItem(stepKey);
  return data ? JSON.parse(data) : {};
};

const TabForm2 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const maxStep = useRef(0);

  const StepComponent = STEP_COMPONENTS[currentStep];
  const stepkey = STEP_KEYS[currentStep];

  const defaultValue = getDefaultValues(stepkey);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    localStorage.setItem(stepkey, JSON.stringify(fields));

    maxStep.current = Math.max(maxStep.current, currentStep + 1);

    const isLastStep = currentStep === STEP_COMPONENTS.length - 1;

    if (isLastStep) {
      const result = STEP_KEYS.map(getDefaultValues);
      alert(JSON.stringify(result, null, 2));
    } else setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleOnPrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleOnTabClick = (step) => {
    if (step <= maxStep.current) setCurrentStep(step);
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
        <form onSubmit={handleOnSubmit}>
          <div>
            <StepComponent defaultValues={defaultValue} />
            <div>
              <button
                type="button"
                disabled={currentStep === 0}
                onClick={handleOnPrev}
              >
                Prev
              </button>
              <button type="submit">
                {currentStep === STEP_COMPONENTS.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabForm2;
