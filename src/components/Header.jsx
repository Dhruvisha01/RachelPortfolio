import React, { useState } from "react";
import './header.css';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header">
            <div className="logoName">
                <img src="./logo.svg" alt="Rachel Sadeh logo" />
                <h1 className="nunito-regular name">Rachel Sadeh</h1>
            </div>
            {/* Hamburger icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>
            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className="epilogue-regular">About</li>
                    <li className="epilogue-regular">Work</li>
                    <li className="epilogue-regular">Resume</li>
                </ul>
            </div>

        </div>
    );
}   