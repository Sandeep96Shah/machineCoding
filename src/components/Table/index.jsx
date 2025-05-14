import { useEffect, useState } from "react";
import { debounced } from "./constants";
import "./table.css";

const API = "https://609cd6ba04bffa001792d638.mockapi.io/books";
const LIMIT = 10;
const PREV = "Prev";
const NEXT = "Next";
const ASC = "asc";
const DESC = "desc";

const Table = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [colummDetails, setColumnDetails] = useState({
    name: "",
    order: "",
  });

  const handleOnChange = (value) => {
    setPage(1);
    setSearch(value);
  };

  const debouncedSearch = debounced(handleOnChange, 500);

  //   Api Logic start
  const handleUnSuccessfulCase = () => {
    setList([]);
    alert("Opps something went wrong!");
  };

  const getSearchResult = async () => {
    try {
      const response = await fetch(
        `${API}?limit=${LIMIT}&page=${page}&search=${search}&sortBy=${colummDetails?.name}&order=${colummDetails?.order}`
      );
      if (response.status !== 200) {
        handleUnSuccessfulCase();
      } else {
        const data = await response.json();
        setList(data);
      }
    } catch (err) {
      handleUnSuccessfulCase();
    }
  };
  //   Api Logic End

  // Pagination Start
  const handlePagination = (type) => {
    if (type === PREV) {
      setPage((prevPage) => prevPage - 1);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };
  // Pagination End

  // Sorting Start
  const handleOnSort = (name) => {
    if (name === colummDetails.name) {
      setColumnDetails({
        name,
        order: colummDetails.order === DESC ? ASC : DESC,
      });
    } else {
      setColumnDetails({
        name,
        order: ASC,
      });
    }
  };
  // Sorting End

  useEffect(() => {
    getSearchResult();
  }, [search, page, colummDetails]);

  return (
    <>
      <h1 className="table-header">Table</h1>
      <div className="table-container">
        <input
          defaultValue={search}
          onChange={(event) => debouncedSearch(event.target.value)}
          className="table-search-field"
          placeholder="Search"
        />
        <table className="table-content-container">
          <tr>
            <th onClick={() => handleOnSort("name")}>Name</th>
            <th onClick={() => handleOnSort("book_author")}>Book Author</th>
            <th onClick={() => handleOnSort("price")}>Price</th>
          </tr>
          {Boolean(list?.length) ? (
            list?.map(({ name, book_author, price }, index) => (
              <tr key={index} className="table-body-row-container">
                <td>{name}</td>
                <td>{book_author}</td>
                <td>{price}</td>
              </tr>
            ))
          ) : (
            <p>No Data</p>
          )}
        </table>
      </div>
      <div className="table-btn-container">
        <button
          onClick={() => handlePagination(PREV)}
          disabled={page === 1}
          className="pagination-btn"
        >
          {PREV}
        </button>
        <button
          onClick={() => handlePagination(NEXT)}
          disabled={!Boolean(list?.length) || list?.length < 10}
          className="pagination-btn"
        >
          {NEXT}
        </button>
      </div>
    </>
  );
};

export default Table;
