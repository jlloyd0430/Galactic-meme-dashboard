import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.PNG";
import "./App.css";

export default function Navbar() {
  return (
    <header>
      <div className="logo-title">
        <Link to="/">
          <img src={logo} alt="meme" className="logo" />
        </Link>
        <h1 className="title">Meme Dashboard</h1>
        <div className="pages">
          <Link to="/browse" className="pages">
            Browse
          </Link>
          <Link to="/create" className="pages">
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}
