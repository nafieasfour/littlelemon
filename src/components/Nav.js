
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
          Home
        </li>
        <li className="item">
          About
        </li>
        <li className="item">
          Menu
        </li>
        <li className="item">
          Reservations
        </li>
        <li className="item">
          Order Online
        </li>
        <li className="item">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
