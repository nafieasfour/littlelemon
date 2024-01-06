import React from 'react'
import "./footer.css"
import endlogo from "../assets/logo2.png"


export default function Footer() {
  return (
    <div className='info'>
      <img src={endlogo} alt="Logo" className='imgend' />
      <ul id='bottomnav'>
        <h3>Doormat Navigation</h3>
        <li className="item">
          <a href="#home">Home</a>

        </li>
        <li className="item">
          <a href="#about">About</a>

        </li>
        <li className="item">
          <a href="#menu">Menu</a>

        </li>
        <li className="item">
          <a href="#reservations">Reservations</a>

        </li>
        <li className="item">
          <a href="#order_online">Order Online</a>
        </li>
        <li className="item">
          <a href="#login">Login</a>
        </li>
      </ul>
      <ul id='bottomcontact'>
        <h3>Contact</h3>
        <li className="item">
          <a href="#home">Adress</a>

        </li>
        <li className="item">
          <a href="#about">phone number</a>

        </li>
        <li className="item">
          <a href="#menu">email</a>

        </li>
      </ul>
      <ul id='bottomsocialmedia'>
        <h3>Social Media Links</h3>
        <li className="item">
          <a href="#home">Adress</a>

        </li>
        <li className="item">
          <a href="#about">phone number</a>

        </li>
        <li className="item">
          <a href="#menu">email</a>

        </li>
      </ul>

    </div>
  )
}
