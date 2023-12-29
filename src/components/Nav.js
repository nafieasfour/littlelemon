
import "./nav.css";
import React from 'react';
import Logo from "../assets/Logo.svg"

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
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
    </nav>
  );
};

export default Nav;
