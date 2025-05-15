import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "nameList";
const ENTER = "Enter";

const InputChips = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = (name) => setName(name);

  const updateNameList = (updatedNameList) => {
    setList(updatedNameList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNameList));
  };

  const handleKeyDown = (event) => {
    if (event.key === ENTER && name.trim()) {
      const updatedNameList = [...list, { name, id: Date.now() }];
      setName("");
      updateNameList(updatedNameList);
    }
  };

  const handleOnRemove = (id) => {
    const updatedNameList = list.filter((item) => item.id !== id);
    setList(updatedNameList);
    updateNameList(updatedNameList);
  };

  useEffect(() => {
    const nameList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];
    setList(nameList);
  }, []);

  return (
    <div>
      <input
        onKeyDown={handleKeyDown}
        value={name}
        onChange={(event) => handleOnChange(event?.target?.value)}
      />
      {list.map(({ name, id }) => (
        <div key={id}>
          <p>{name}</p> <span onClick={() => handleOnRemove(id)}>X</span>
        </div>
      ))}
    </div>
  );
};

export default InputChips;
