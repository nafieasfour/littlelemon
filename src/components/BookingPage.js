import React from 'react'
import BookingForm from './BookingForm.js'
import { Link } from 'react-router-dom'
import Nav from "./Nav.js"
import Footer from "./Footer.js"

export default function BookingPage() {
  return (
    <div>
      <Link to="/booking">
        <Nav/>
        <BookingForm />
        <Footer/>
      </Link>
    </div>
  )
}
