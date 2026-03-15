import { useCallback, useEffect, useState } from "react";
import "./table.css";
import { API, ASC, debounceSearch, DESC, PAGE_SIZE } from "./constants";

const Table2 = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [search, setSearch] = useState("");
  const [columnDetails, setColumnDetails] = useState({
    name: "",
    order: "",
  })

  const fetchData = async ({ search = "", page = 1, pageSize = PAGE_SIZE, column = "", order = ASC }) => {
    try {
      const response = await fetch(
        `${API}?limit=${pageSize}&page=${page}&search=${search}&sortBy=${column}&order=${order}`,
      );
      if (response.ok) {
        const jsonData = await response.json();
        setPosts(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const debouncedSearch = useCallback(debounceSearch(fetchData, 500), []);
  const debouncedSearch = useCallback(
    debounceSearch(
      (value) => fetchData({ search: value, page, pageSize }),
      500,
    ),
    [],
  );

  const handlePrevClick = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    fetchData({ search, page: page - 1, pageSize });
  };

  const handleNextClick = () => {
    setPage((prev) => prev + 1);
    fetchData({ search, page: page + 1, pageSize });
  };

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
    debouncedSearch(value);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setPage(1);
    fetchData({ search, page: 1, pageSize: value });
  };

  const handleOnSort = (name) => {
    if(name === columnDetails.name){
      setColumnDetails((prevColumnDetails) => ({
        ...prevColumnDetails,
        order: prevColumnDetails.order === DESC ? ASC : DESC,
      }))
    }else {
      setColumnDetails({
        name,
        order: ASC
      })
    }
  }

  useEffect(() => {
    fetchData({ search, page, pageSize, column: columnDetails.name, order: columnDetails.order });
  }, [columnDetails]);

  useEffect(() => {
    if (!Boolean(posts.length)) {
      fetchData({});
    }
  }, []);

  return (
    <div className="table2-wrapper">
      <div className="table2-header">
        <h2>Table 2</h2>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="table2-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleOnSort("id")}>Id</th>
              <th onClick={() => handleOnSort("name")}>Name</th>
              <th onClick={() => handleOnSort("book_author")}>Book Author</th>
              <th onClick={() => handleOnSort("price")}>Price</th>
              <th onClick={() => handleOnSort("createdAt")}>Created Date</th>
            </tr>
          </thead>
          <tbody className="table2-body">
            {posts?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.book_author}</td>
                <td>{item.price}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="action2-btns">
        <button onClick={handlePrevClick} disabled={page === 1}>
          Prev
        </button>
        <select
          name="pageSize"
          id="pageSize"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
        >
          <option value={PAGE_SIZE / 2}>5</option>
          <option value={PAGE_SIZE}>10</option>
          <option value={PAGE_SIZE * 2}>20</option>
          <option value={PAGE_SIZE * 3}>30</option>
        </select>
        <p>{page}</p>
        <button
          onClick={handleNextClick}
          disabled={!Boolean(posts?.length) || posts?.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table2;
