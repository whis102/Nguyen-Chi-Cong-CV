import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "@mui/material";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 560) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" href="#about">
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#skills">
            SKILLS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#experiences">
            EXPERIENCES
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#projects">
            PROJECTS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
