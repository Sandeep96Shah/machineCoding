import { useState, useEffect } from "react";
import {dummyUsers} from "./constants";
import './dataTable1.css';

export default function DataTable() {
  const message = "Data Table";
  const [limit, setLimt] = useState(5);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const totalPage = Math.ceil(dummyUsers.length / limit);

  const handleLimitOnChange = (event) => {
    setLimt(event.target.value);
    setPage(1);
  };

  const handlePagination = (type) =>
    setPage((prevPage) => (type === "prev" ? prevPage - 1 : prevPage + 1));

  useEffect(() => {
    setUserList(dummyUsers.slice((page - 1) * limit, page * limit));
  }, [limit, page]);

  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key} aria-label={`${label} column`}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-container">
        <select onChange={handleLimitOnChange}>
          {[5, 10, 15, 20].map((item) => (
            <option value={item}> Show {item}</option>
          ))}
        </select>
        <div className="pagination-container">
          <button
            disabled={page === 1}
            onClick={() => handlePagination("prev")}
          >
            Prev
          </button>
          <p>{`Page ${page} of ${totalPage}`}</p>
          <button
            disabled={page === totalPage}
            onClick={() => handlePagination("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
