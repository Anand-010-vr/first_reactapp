import React from "react";

function MainContent({ handleLoginClick }) {
  return (
    <main className="main-content">
      <h2>Welcome to Lucia Charitable</h2>
      <button onClick={handleLoginClick} className="login-button">Login</button>
      <p>About Us: Lucia Charitable is a non-profit organization committed to making a positive impact...</p>
    </main>
  );
}

export default MainContent;
