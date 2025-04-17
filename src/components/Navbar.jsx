import React from "react";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">My certifications</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
