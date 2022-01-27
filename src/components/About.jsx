import React from "react";
import "./About.css";

const About = ({ hero, habilities }) => {
  return (
   
   <div className="card">
      <div className="card-list__about"> 
      <p> {hero.aboutMe.info} </p>
      </div>
       <h3  className="card-title">Programación</h3>
       <div className="card-list__program"> 
       
        {hero.habilities.map((txt) => (
          <p key={txt}> {txt}</p>
        ))}
      </div>
    </div>



  
  );
};

export default About;
