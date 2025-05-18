import React, { useState } from "react";
import './bookFlight.css';

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return [year, month, day].join("-");
};

const TOADY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

const BookFlight = () => {
  const [oneWayFlight, setOneWayFlight] = useState(
    formatDate(new Date(Date.now() + DAY_IN_SECONDS))
  );
  const [returnedFlight, setReturnedFlight] = useState(oneWayFlight);
  const [flight, setFlight] = useState(1);

  const handleOnFlightChange = (event) => setFlight(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (flight === '1') {
      alert(
        `You have booked a one-way flight on ${oneWayFlight}`,
      );
      return;
    }

    alert(
      `You have booked a return flight, departing on ${oneWayFlight} and returning on ${returnedFlight}`,
    );
  };
  return (
    <div className="book-flight-container">
      <form onSubmit={handleOnSubmit} className="book-flight-form-container">
        <select onChange={handleOnFlightChange}>
          <option value="1">One Way Flight</option>
          <option value="2">One Way Flight</option>
        </select>
        <input
          type="date"
          value={oneWayFlight}
          onChange={(event) => setOneWayFlight(event.target.value)}
          min={TOADY}
          aria-label="Departure Date"
        />

        {flight === "2" ? (
          <input
            type="date"
            value={returnedFlight}
            onChange={(event) => setReturnedFlight(event.target.value)}
            min={oneWayFlight}
            aria-label="Returned Date"
          />
        ) : null}
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookFlight;
