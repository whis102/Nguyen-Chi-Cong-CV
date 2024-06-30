import React from "react";
import "./Banner.scss";
import profileImage from "../../assets/avatar.jpg";
import resume from "../../assets/FRONTEND DEVELOPER INTERN.pdf";
import { Link } from "@mui/material";

function Banner() {
  return (
    <div className="banner-container">
      <img src={profileImage} alt="Profile" className="banner-image" />
      <h1>Nguyen Chi Cong</h1>
      <h2>Front-end Developer</h2>
      <Link href={resume} className="banner-btn" target="__blank">
        My CV
      </Link>
    </div>
  );
}

export default Banner;
