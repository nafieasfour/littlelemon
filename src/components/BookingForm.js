import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAPI, submitAPI } from "./Api.js";
import "./bookingform.css"

// Reducer function to handle state changes for availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    case "INITIALIZE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

// Function to update availableTimes based on the selected date
const updateTimes = async (selectedDate) => {
  try {
    const updatedTimes = await fetchAPI(selectedDate);
    return updatedTimes;
  } catch (error) {
    console.error("Error fetching available times:", error);
    return [];
  }
};

// Function to initialize the initial state for availableTimes
const initializeTimes = async () => {
  try {
    // Create a Date object to represent today's date
    const today = new Date();
    // Format the date as YYYY-MM-DD
    const todayFormatted = today.toISOString().split("T")[0];

    const initialTimes = await fetchAPI(todayFormatted);
    return initialTimes;
  } catch (error) {
    console.error("Error initializing available times:", error);
    return [];
  }
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
    (initialState) => initialState
  );

  // useEffect to initialize the availableTimes when the component mounts
  useEffect(() => {
    const initialize = async () => {
      const initialTimes = await initializeTimes();
      dispatch({ type: "INITIALIZE_TIMES", payload: initialTimes });
    };

    initialize();
  }, []); // Empty dependency array to ensure it runs once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    try {
      // Replace this with your actual form submission logic
      const submissionResult = await submitAPI(formData);

      if (submissionResult) {
        console.log("Form submitted successfully!");
        // Redirect or show a success message as needed
      } else {
        console.error("Form submission failed.");
        // Handle submission failure
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle submission error
    }
  };

  // Function to handle date change and update available times
  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    const updatedTimes = await updateTimes(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });

    // Set the date in the state
    setDate(selectedDate);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px", paddingLeft: "600px" }}
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
