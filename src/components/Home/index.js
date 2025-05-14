import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlenavigate = (to) => navigate(to);

  return (
    <div>
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
    </div>
  );
};

export default Home;
