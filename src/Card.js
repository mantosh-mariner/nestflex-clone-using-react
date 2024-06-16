import React from "react";
import "./index.css";
function Card(props)
{
  return ( 
     <div className="cards">
      <div className="card">
        <img 
        src={props.imgsrc} alt=""/>
        <div className="card_category">
          <span className="cart_title"> {props.title}</span>
          <h3>{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
     </div>
    </div>

  );
}
export default Card;