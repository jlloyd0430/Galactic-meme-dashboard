import React, { useState } from "react";
import logo from "./images/logo.PNG";
import { Link } from "react-router-dom";
import "./App.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <header>
      <div className="logo-title">
        <img src={logo} alt="meme" className="logo" />
        <h1 className="title">Meme Dashboard</h1>
        <div className="pages">
          <Link to="/mission" className="pages">
            Browse
          </Link>
          <Link to="/gallery" className="pages">
            Create
          </Link>
          {/* <Link to="/contact">Worksheet</Link> */}
        </div>
      </div>
    </header>
  );
}
