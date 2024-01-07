import React, { useState } from 'react';

export default function BookingForm() {
    // State variables for form fields
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    // State variable for available times
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace this with your actual form submission logic
        console.log("Form submitted with values:", { date, time, guests, occasion });
        console.log("hi")
    }
    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                onChange={(e) => setGuests((e.target.value))}
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

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}
