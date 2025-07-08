import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  const handlenavigate = (to) => navigate(to);

  return (
    <div className="home-container">
      <button onClick={() => handlenavigate("otp-input")}>OTP Input</button>
      <button onClick={() => handlenavigate("tab-form")}>Tab Form</button>
      <button onClick={() => handlenavigate("table-pagination")}>
        Table Pagination
      </button>
      <button onClick={() => handlenavigate("auto-complete")}>
        Auto Complete
      </button>
      <button onClick={() => handlenavigate("progress-bar")}>
        Progress Bar
      </button>
      <button onClick={() => handlenavigate("tab-form-1")}>Tab Form 1</button>
      <button onClick={() => handlenavigate("counter")}>Counter</button>
      <button onClick={() => handlenavigate("debounce-throttle")}>
        DebounceThrottle
      </button>
      <button onClick={() => handlenavigate("toast")}>Toast</button>
      <button onClick={() => handlenavigate("star")}>Star</button>
      <button onClick={() => handlenavigate("pagination")}>Pagination</button>
      <button onClick={() => handlenavigate("dnd")}>DND</button>
      <button onClick={() => handlenavigate("file-upload")}>File Upload</button>
      <button onClick={() => handlenavigate("memory-game")}>Memory Game</button>
      <button onClick={() => handlenavigate("nested-checkbox")}>
        Nested Checkbox
      </button>
      <button onClick={() => handlenavigate("virtualized-list")}>
        VirtualizedList
      </button>
      <button
        onClick={() => handlenavigate("infinite-virtualized-list-scroll")}
      >
        Infinite Virtualized List Scroll
      </button>
      <button onClick={() => handlenavigate("modal")}>Modal</button>
      <button onClick={() => handlenavigate("stepper")}>Stepper</button>
      <button onClick={() => handlenavigate("grid-light")}>Grid Light</button>
      <button onClick={() => handlenavigate("selectable-grid")}>Selectable Grid</button>
      <button onClick={() => handlenavigate("table")}>Table</button>
      <button onClick={() => handlenavigate("input-chips")}>Input Chips</button>
      <button onClick={() => handlenavigate("guess-number")}>Guess Number</button>
      <button onClick={() => handlenavigate("dark-mode")}>Dark Mode</button>
      <button onClick={() => handlenavigate("google-search")}>Google Search</button>
      <button onClick={() => handlenavigate("accordian")}>Accordian</button>
      <button onClick={() => handlenavigate("contact-form")}>Contact Form</button>
      <button onClick={() => handlenavigate("book-flight")}>Book Flight</button>
      <button onClick={() => handlenavigate("generate-table")}>Generate Table</button>
      <button onClick={() => handlenavigate("tabs-1")}>Tabs - 1</button>
      <button onClick={() => handlenavigate("data-table-1")}>Data Table - 1</button>
      <button onClick={() => handlenavigate("dice-roller")}>Dice Roller</button>
      <button onClick={() => handlenavigate("liked-button")}>Liked Button</button>
      <button onClick={() => handlenavigate("traffic-light")}>Traffic Light</button>
      <button onClick={() => handlenavigate("dnd-1")}>DND-1</button>
      <button onClick={() => handlenavigate("tab-form-2")}>Tab Form 2</button>
      <button onClick={() => handlenavigate("tic-tac-toe")}>Tic Tac Toe</button>
      <button onClick={() => handlenavigate("list-infinite-scroll")}>List Infinite Scroll</button>
      <button onClick={() => handlenavigate("file-explorer-1")}>File Explorer-1</button>
      <button onClick={() => handlenavigate("job-board")}>Job board</button>
      <button onClick={() => handlenavigate("limit-infinite-list")}>Limit Infinite List</button>
      <button onClick={() => handlenavigate("undoable-counter")}>Undoable Counter</button>
      <button onClick={() => handlenavigate("password-validator")}>Password Validator</button>
      <button onClick={() => handlenavigate("grid-color")}>Grid Color</button>
      <button onClick={() => handlenavigate("p-s-list")}>Publicis Sapient</button>
      <button onClick={() => handlenavigate("p-s-counter")}>Publicis Sapient Counter</button>
      <button onClick={() => handlenavigate("guess-word")}>Guess Word</button>
      <button onClick={() => handlenavigate("debounce-search")}>Debounce Search</button>
    </div>
  );
};

export default Home;
