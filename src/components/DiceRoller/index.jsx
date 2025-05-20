import { useState } from "react";
import './diceRoller.css'

const DICE_DOTS_POSITION = {
  1: ["center-dot"],
  2: ["top-left-dot", "bottom-right-dot"],
  3: ["top-left-dot", "center-dot", "bottom-right-dot"],
  4: ["top-left-dot", "top-right-dot", "bottom-left-dot", "bottom-right-dot"],
  5: [
    "top-left-dot",
    "top-right-dot",
    "center-dot",
    "bottom-left-dot",
    "bottom-right-dot",
  ],
  6: [
    "top-left-dot",
    "top-right-dot",
    "center-left-dot",
    "center-right-dot",
    "bottom-left-dot",
    "bottom-right-dot",
  ],
};

const Dice = ({ value }) => (
  <div className="dice-container">
    <div className="dots">
      {DICE_DOTS_POSITION[value].map((pos) => (
        <p className={["dot", pos].join(" ")}></p>
      ))}
    </div>
  </div>
);

const DiceRoller = () => {
  const [list, setList] = useState([]);

  const handleDiceList = (value) => {
    const showList = [];
    for (let i = 0; i < value; i++) {
      showList.push(Math.floor(Math.random() * 6 + 1));
    }
    setList(showList);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const diceValue = formData.get("diceValue");
    handleDiceList(diceValue);
  };

  return (
    <div>
      <p>Number of Dice</p>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="number"
            aria-label="Dice Number Field"
            min={1}
            max={12}
            name="diceValue"
          />
          <button type="submit" aria-label="Roll Button">
            Roll
          </button>
        </div>
      </form>
      <div className="dice-list-container">
        {list.map((item, index) => (
          <Dice value={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DiceRoller;
