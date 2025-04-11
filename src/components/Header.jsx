import React, { useState } from "react";
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
          <li>
            <a
              href="/about"
              aria-label="Open About Page"
              className="epilogue-regular"
            >
              About
            </a>
          </li>
          <li className="epilogue-regular">Work</li>
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
