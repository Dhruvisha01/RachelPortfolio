import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logoName">
        <img src="./logo.svg" alt="Rachel Sadeh logo" />
        <h1 className="nunito-regular name">Rachel Sadeh</h1>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="epilogue-regular">
            <Link to="/about">About</Link>
          </li>
          <li className="epilogue-regular">
            <a href="/#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
          </li>
          <li>
            <a
              href="./UX Design Resume Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className="epilogue-regular"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
