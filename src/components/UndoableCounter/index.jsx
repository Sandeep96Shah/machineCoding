import { useState } from "react";
import "./styles.css";

export default function App() {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const visibleHistory = history.slice(0, currentStep);

  const handleOperation = (operation) => {
    const oldValue = value;
    const newValue = eval(`${value} ${operation}`);
    setValue(newValue);
    setHistory((prevHistory) => [
      ...prevHistory,
      { operation, oldValue, newValue },
    ]);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleNavigateHistory = (type) =>
    setCurrentStep((prevStep) =>
      type === "redo" ? prevStep + 1 : prevStep - 1,
    );

  const handleReset = () => {
    setHistory([]);
    setCurrentStep(0);
    setValue(0);
  };

  const actionButtons = [
    {
      name: "Undo",
      disabled: !Boolean(visibleHistory.length) || currentStep === 0,
      onClick: () => handleNavigateHistory("undo"),
    },
    {
      name: "Redo",
      disabled: currentStep === history.length,
      onClick: () => handleNavigateHistory("redo"),
    },
    { name: "Reset", disabled: false, onClick: handleReset },
  ];

  const operations = ["/2", "-1", "value", "+1", "*2"];

  return (
    <div>
      <div>
        {actionButtons.map(({ name, onClick, disabled }) => (
          <button disabled={disabled} onClick={onClick}>
            {name}
          </button>
        ))}
      </div>
      <div className="operation-container">
        {operations.map((operation, index) =>
          index === 2 ? (
            <p>{value}</p>
          ) : (
            <button onClick={() => handleOperation(operation)}>
              {operation}
            </button>
          ),
        )}
      </div>
      <table>
        {visibleHistory.length ? (
          <tr>
            <th>Operation</th>
            <th>Old</th>
            <th>New</th>
          </tr>
        ) : null}
        {visibleHistory.map(({ operation, oldValue, newValue }) => (
          <tr>
            <td>{operation}</td>
            <td>{oldValue}</td>
            <td>{newValue}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
