
import "./nav.css";
import React from 'react';
import Logo from "../assets/Logo.svg"

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Menu
        </li>
        <li>
          Reservations
        </li>
        <li>
          Order Online
        </li>
        <li>
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
