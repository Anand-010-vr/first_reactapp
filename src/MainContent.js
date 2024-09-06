import React from "react";

function MainContent() {
  return (
    <main>
      <h2>About Lucia Charitable</h2>
      <p>
        Lucia Charitable is dedicated to making a positive impact in our communities by supporting various initiatives. Join us in our mission to bring hope and help to those in need.
      </p>
      <button onClick={() => alert("Thank you for your interest in volunteering!")}>
        Volunteer With Us!
      </button>
    </main>
  );
}

export default MainContent;
