import React from "react";
import "./Header.scss";
import { Link } from "@mui/material";

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
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
    </header>
  );
}

export default Header;
