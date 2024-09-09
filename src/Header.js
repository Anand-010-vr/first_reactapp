import React from "react";
import logo from "./Logo_color_Charitable_page-0001.jpg"; // Replace with the correct path

function Header({ handleTabChange }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Lucia Charitable" className="logo" />
      </div>
      <nav className="nav">
        <button onClick={() => handleTabChange("Home")} className="nav-button">
          Home
        </button>
        <button onClick={() => handleTabChange("Contact Us")} className="nav-button">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Header;
