import "./styles.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Create from "./Create";
import Browse from "./Browse";

export default function App() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password === "yarn") {
      setLoggedIn(true);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        {loggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        ) : (
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
