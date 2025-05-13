import React, { useEffect, useRef, useState } from "react";
import "./stepper.css";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  const components = [
    { step: <div>Customer Info</div>, title: "Customer Info" },
    { step: <div>Shipping Info</div>, title: "Shipping Info" },
    { step: <div>Payment</div>, title: "Payment" },
    { step: <div>Delivered</div>, title: "Delivered" },
  ];

  const handleClick = () => {
    if (currentStep !== components.length)
      setCurrentStep((prevStep) => prevStep + 1);
    else {
      setIsCompleted(true);
      alert("Submitted");
    }
  };

  const calculateprogressbarWidth = () => {
    return ((currentStep - 1) / (components.length - 1)) * 100;
  };

  useEffect(() => {
    console.log(stepRef.current[0].offsetWidth);
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[components.length - 1].offsetWidth / 2,
    });
  }, [stepRef]);

  return (
    <div className="stepper-container">
      <div className="step-components">
        {components.map((step, index) => (
          <div
            key={index}
            className="each-step"
            ref={(el) => (stepRef.current[index] = el)}
          >
            <div className="stepContainer">
              <p
                className={`step-count ${
                  index + 1 < currentStep || isCompleted ? "done" : ""
                } ${
                  index + 1 === currentStep && !isCompleted ? "current" : ""
                }`}
              >
                {index + 1 < currentStep || isCompleted ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </p>
              <p>{step.title}</p>
            </div>
          </div>
        ))}
        <div
          className="progress-bar-container-1"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateprogressbarWidth()}%` }}
          ></div>
        </div>
      </div>

      {components[currentStep - 1].step}
      <button onClick={handleClick} className="btn">
        {currentStep !== components.length ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default Stepper;
