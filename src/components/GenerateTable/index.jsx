import { useState } from "react";

const GenerateTable = () => {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { rows, columns } = Object.fromEntries(formData);
    setRows(rows);
    setColumns(columns);
  };

  const getTable = () => (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }, () => 0).map((_, columnIndex) => (
              <td key={columnIndex}>
                {columnIndex % 2 === 0
                  ? rows * columnIndex + rowIndex + 1
                  : rows * (columnIndex + 1) - rowIndex}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Rows</label>
          <input
            name="rows"
            type="number"
            defaultValue={rows}
            min={1}
            aria-label="Number of Rows"
          />
        </div>

        <div>
          <label>Columns</label>
          <input
            name="columns"
            type="number"
            defaultValue={columns}
            min={1}
            aria-label="Number of Columns"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>{rows && columns ? getTable() : null}</div>
    </div>
  );
}

export default GenerateTable;
