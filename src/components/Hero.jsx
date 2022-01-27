import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="card">
        <div className="title">
          <h2>{hero.name}</h2>
        </div>
        <h3>{hero.description}</h3>

        <img src={hero.image} alt="" />

        <div className="links">
          <a href={"mailto:" + hero.email}>
            <img
              className="email"
              alt="email"
              src="  https://i.imgur.com/ekwVSZo.png"
            />
          </a>

          <a href={hero.gitHub}>
            <img
              className="linkedin"
              alt="linkedin"
              src="https://i.ibb.co/cQb4MFM/link.png"
            />
          </a>
          <a href={hero.linkedin}>
            <img
              className="github"
              alt="github"
              src="https://i.ibb.co/CHNqQ7D/git.png"
            />
          </a>
          <a href={hero.cityLink}>
            <img
              className="map"
              alt="map"
              src=" https://i.imgur.com/YleDHKQ.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
