import React from 'react';
import  './index.css';

function Cards(props){

    return(
          <div className="card" style={{display: "inline-block"}}>
              <img src={props.imgsrc} alt="image here" className="card-img" />
              <div  className="card-info">
                  <span className="card-catagory"> {props.info} </span>
                  <h3 className="card-title">{props.title} </h3>
                  <a href={props.link} target="blank">
                      <button>Watch Now</button>
                  </a>
              </div>
      </div>
    )
  }

  export default Cards;