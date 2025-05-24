import { useState, useRef, useEffect } from "react";
import "./index.css";

const API = "https://dummyjson.com/recipes/search?limit=10";

const ListInfiniteScroll = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const page = useRef(1);
  const listEndRef = useRef(null);

  const handleFetchApi = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}&page=${page.current}`);
      if (response.ok) {
        const data = await response.json();
        const updatedList = [...list, ...data.recipes];
        setList(updatedList);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Server Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((data) => {
      if (data[0].isIntersecting) {
        page.current = page.current + 1;
        handleFetchApi();
      }
    });

    if (listEndRef.current) {
      observer.observe(listEndRef.current);
    }
  }, [list]);

  return (
    <div className="App">
      <button onClick={handleFetchApi}>Fetch List</button>
      {list.length ? (
        <div>
          {list.map(({ name, instructions, id }) => (
            <div className="recipe-card" key={id}>
              <p>{name}</p>
              <p>{instructions[0]}</p>
            </div>
          ))}
          <p ref={listEndRef}>{isLoading ? "Loading..." : ""}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ListInfiniteScroll;
