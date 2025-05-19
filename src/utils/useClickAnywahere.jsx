import { useEffect } from "react";

const useClickAnywahere = (handler) => {
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);
};

export default useClickAnywahere;

// Implement a useClickAnywhere hook that handles click events anywhere on the document.

// Arguements
// handler: (event: MouseEvent) => void: The function to be called when a click event is detected anywhere on the document
