import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
