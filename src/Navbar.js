import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.PNG";
import "./App.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="meme" className="logo" />
      </Link>
      <h1 className="title">Galactic Memes</h1>
      <nav className="nav-links">
        <Link to="/browse" className="link">
          Browse
        </Link>
        <Link to="/create" className="link">
          Create
        </Link>
      </nav>
    </header>
  );
}
