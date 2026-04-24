import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const resumeHref = `${process.env.PUBLIC_URL}/UX%20Design%20Resume%20Portfolio.pdf`;

  const goToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <div className="header">
      {/* Use Link so it doesn't full-refresh the page */}
      <Link to="/" className="logoName">
        <img src="/logo.svg" alt="Rachel Sadeh logo" />
        <h1 className="nunito-regular name">Rachel Sadeh</h1>
      </Link>

      {/* Hamburger icon */}
      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="main-nav-links"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <div
        id="main-nav-links"
        className={`links ${menuOpen ? "open" : ""}`}
      >
        <ul>
          <li className="epilogue-regular">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="epilogue-regular">
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="epilogue-regular">
            <button
              type="button"
              className="header-link-button epilogue-regular"
              onClick={() => goToSection("work")}
            >
              Work
            </button>
          </li>
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className="epilogue-regular"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
