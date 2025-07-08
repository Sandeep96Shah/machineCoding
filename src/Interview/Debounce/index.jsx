import React, { useCallback, useState } from 'react'
import { debounce } from './constants';

const DebounceComp = () => {
    const [search, setSearch] = useState("");

    const handleApi = (value) => {
        console.log("Api calling", value)
    }

    const debouncedFnc = useCallback(debounce(handleApi, 500), []);

    const handleOnChange = (event) => {
        setSearch(event.target.value);
        debouncedFnc(event.target.value);
    }
  return (
    <div>
        <input name='search' value={search} onChange={handleOnChange} />
    </div>
  )
}

export default DebounceComp