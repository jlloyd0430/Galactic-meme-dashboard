import "./styles.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Create from "./Create";
import Browse from "./Browse";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
      {/* <div className="main-container">

      </div> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
