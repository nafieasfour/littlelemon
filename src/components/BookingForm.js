import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

// Reducer function to handle state changes for availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    case "INITIALIZE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};

// Function to update availableTimes based on the selected date
const updateTimes = (selectedDate) => {
  // For now, return the same available times regardless of the date
  // You can replace this logic with your actual implementation
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Function to initialize the initial state for availableTimes
const initializeTimes = () => {
  // You can replace this with your actual initial state logic
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export default function BookingForm() {
  // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // State variable and dispatch function for available times
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // useEffect to initialize the availableTimes when the component mounts
  useEffect(() => {
    dispatch({ type: "INITIALIZE_TIMES" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual form submission logic
    console.log("Form submitted with values:", {
      date,
      time,
      guests,
      occasion,
    });
    console.log("hi");
  };

  // Function to handle date change and update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const updatedTimes = updateTimes(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });

    // Set the date in the state
    setDate(selectedDate);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((availableTime, index) => (
          <option key={index}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>
      <Link to="/reservationconfirmed">
        <input type="submit" value="Make Your reservation" />
      </Link>
    </form>
  );
}
