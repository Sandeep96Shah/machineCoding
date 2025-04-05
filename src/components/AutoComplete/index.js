import React, { useEffect, useState } from "react";
import "./autoComplete.css";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cached, setCached] = useState({});

  const getSearchResult = async () => {
    if(cached[search]) return setResult(cached[search]);

    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${search}`
    );
    const data = await response.json();
    setResult(data?.recipes);
    setCached((prevCached) => ({
        ...prevCached,
        [search]: data?.recipes
    }))
  };

  const handleOnChange = (e) => setSearch(e?.target?.value);

  useEffect(() => {
    const timer = setTimeout(() => getSearchResult(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <div className="auto-complete-container">
      <h1>Auto Complete</h1>
      <div className="search-container">
        <input
          type="text"
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
          className="search-field"
          value={search}
          onChange={handleOnChange}
        />
        {showResult ? (
          <div className="result-container">
            {result?.map(({ name, id }) => (
              <p key={id} className="result">
                {name}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AutoComplete;
