import "./header.css";
import React from 'react';
import Food from "../assets/restauranfood.jpg"

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <h1>Little Lemon</h1>
          <p id="city">Chicago</p>
          <p className="Loremheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <button className="buttonStyle">
            Reserve a Table
          </button>
        </div>
        <div className="right">
          <img src={Food} alt="Logo" />

        </div>
      </div>
    </div>
  )
}
