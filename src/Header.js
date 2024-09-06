import React from "react";
import logo from "./Logo_color_Charitable_page-0001.jpg"; // Import the logo image

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Lucia Charitable Logo" className="logo" />
        <h1>Lucia Charitable</h1>
      </div>
    </header>
  );
}

export default Header;
