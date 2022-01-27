import React from "react";
import "./More.css";

const More = ({ languages, volunteer }) => {
  return (
    <div className="more">
      <div className="divider">
 
 
 
      <div className="card-idiomas"> 
      <h3>Idiomas</h3>
        <p>{languages.language1}</p> 
        <p>{languages.language2}</p>
      </div>
       
  
        
         
   
      </div>
    </div>
  );
};

export default More;
