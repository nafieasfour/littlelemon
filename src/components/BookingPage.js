import React from 'react'
import BookingForm from './BookingForm.js'
import { Link } from 'react-router-dom'

export default function BookingPage() {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <Link to="/booking">
        <BookingForm/>
      </Link>
    </div>
  )
}
