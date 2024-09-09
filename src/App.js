import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      <Header handleTabChange={handleTabChange} />
      {currentTab === "Home" ? (
        <MainContent handleLoginClick={handleLoginClick} />
      ) : (
        <ContactUs />
      )}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input type="text" name="username" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
