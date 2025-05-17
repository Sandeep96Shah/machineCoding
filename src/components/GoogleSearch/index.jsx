import React, { useCallback, useEffect, useRef, useState } from "react";
import { debounceSearch } from "./constants";
import "./googleSearch.css";

const API = "https://dummyjson.com/recipes/search";
const LIMIT = 10;

const GoogleSearch = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchFieldRef = useRef();

  const getFetchList = async () => {
    try {
      const response = await fetch(`${API}?q=${search}&limit=${LIMIT}`);
      if (response.status === 200) {
        const data = await response.json();
        setList(data?.recipes);
      } else {
        alert("Opps something went wrong!");
      }
    } catch (err) {
      alert("Opps Server Error", err);
    }
  };

  const handleShowSuggestion = () => setShowSuggestion(true);

  const handleOnSearch = useCallback((search) => {
    setSearch(search);
    setShowSuggestion(false);
  }, []);

  const debouncedSearch = useCallback(
    debounceSearch((name) => setSearch(name), 500),
    []
  );

  const handleClickOutside = useCallback((event) => {
    if (
      searchFieldRef.current &&
      !searchFieldRef.current.contains(event.target)
    ) {
      setShowSuggestion(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getFetchList();
  }, [search]);

  return (
    <div ref={searchFieldRef} className="google-search-field-container">
      <input
        type="text"
        onFocus={handleShowSuggestion}
        defaultValue={search}
        onChange={(event) => debouncedSearch(event.target.value)}
      />
      <div>
        {showSuggestion &&
          list?.map(({ name, id }) => (
            <p key={id} onClick={() => handleOnSearch(name)}>
              {name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default GoogleSearch;
