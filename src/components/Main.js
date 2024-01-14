import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";

// Reducer function to handle state changes
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return updateTimes(action.payload);
    default:
      return state;
  }
};

// Function to update availableTimes based on the selected date
const updateTimes = (selectedDate) => {
  // For now, return the same available times regardless of the date
  // You can replace this logic with your actual implementation
  return [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];
};

// Function to initialize the initial state for availableTimes
const initializeTimes = () => {
  // You can replace this with your actual initial state logic
  return [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // useEffect to initialize the availableTimes when the component mounts
  useEffect(() => {
    dispatch({ type: "INITIALIZE_TIMES" });
  }, []);

  // Function to handle the state change when the date is selected
  const handleDateChange = (selectedDate) => {
    const updatedTimes = updateTimes(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
  };

  return (
    <div>
      <h1>Main Component</h1>
      <BookingForm onDateChange={handleDateChange} />
      {/* Other components or UI elements */}
    </div>
  );
};

export default Main;
