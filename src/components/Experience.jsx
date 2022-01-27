import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="experience card">
      <div>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3 className="name">  {item.company}</h3>
              <p>{item.function}</p>
              <p>{item.date}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
