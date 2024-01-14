import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  test("renders a heading element", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test("updates available times when date changes", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");

    // Mocking the updateTimes function
    jest
      .spyOn(BookingForm.prototype, "updateTimes")
      .mockReturnValue(["12:00", "13:00", "14:00"]);

    fireEvent.change(dateInput, { target: { value: "2024-01-15" } });

    const timeSelect = screen.getByLabelText("Choose time");
    const options = screen.getAllByTestId("time-option");

    expect(options.length).toBe(3); // Assuming updateTimes returns 3 times
    expect(timeSelect).toHaveValue("12:00");
  });

  test("initializes available times correctly", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText("Choose time");
    const options = screen.getAllByTestId("time-option");

    expect(options.length).toBe(6); // Assuming initializeTimes returns 6 times
    expect(timeSelect).toHaveValue(""); // Assuming the default selected time is an empty string
  });
});
