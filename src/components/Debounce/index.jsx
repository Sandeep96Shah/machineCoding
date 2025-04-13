import React, { useState, useCallback } from "react";

const DebounceThrottle = () => {
  const [debounceInput, setDebounceInput] = useState("");
  const [throttleInput, setThrottleInput] = useState("");
  const ourDebounce = useCallback((fnc, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fnc(...args);
      }, delay);
    };
  }, []);

  const ourThrottle = useCallback((fnc, delay) => {
    let timer;
    // let lastRun;
    return (...args) => {
      // const now = Date.now();
      // if(!lastRun){
      //     fnc(...args);
      //     lastRun = now;
      // }else {
      //     clearTimeout(timer);
      //     timer = setTimeout(() => {
      //         if(now - lastRun >= delay){
      //             fnc(...args);
      //             lastRun = now;
      //         }
      //     }, [delay - (now - lastRun)])
      // }
      if (!timer) {
        fnc(...args);
        
        timer = setTimeout(() => {
          timer = null;
        }, delay);
      }
    };
  }, []);

  const handleOnChangeDebounce = (e) => {
    console.log(e?.target?.value);
    setDebounceInput(e?.target?.value);
  };

  const handleOnChangeThrottle = (e) => {
    setThrottleInput(e?.target?.value);
  };

  const debounceOnChange = useCallback(
    ourDebounce(handleOnChangeDebounce, 1000),
    []
  );
  const throttleOnChange = useCallback(
    ourThrottle(handleOnChangeThrottle, 1000),
    []
  );

  return (
    <div>
      <div>
        <input type="text" onChange={debounceOnChange} />
        <p>{debounceInput}</p>
      </div>
      <div>
        <input type="text" onChange={throttleOnChange} />
        <p>{throttleInput}</p>
      </div>
    </div>
  );
};

export default DebounceThrottle;
