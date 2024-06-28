import React from "react";
import "./Banner.scss";
import profileImage from "../../assets/avatar.jpg";

function Banner() {
  return (
    <div className="banner-container">
      <img src={profileImage} alt="Profile" className="banner-image" />
      <h1>Nguyen Chi Cong</h1>
      <h2>Front-end Developer</h2>
      <a href="#cv" className="banner-btn">
        My CV
      </a>
    </div>
  );
}

export default Banner;
