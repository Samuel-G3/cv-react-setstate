import React from "react";
import "./About.css";

const About = ({ hero, habilities }) => {
  return (
   
   <div className="card">
      <p> {hero.aboutMe.info} </p>
      
       <h3  className="card-title">Programación</h3>
       <div className="card-list"> 
       
        {hero.habilities.map((txt) => (
          <p key={txt}> {txt}</p>
        ))}
      </div>
    </div>



  
  );
};

export default About;
