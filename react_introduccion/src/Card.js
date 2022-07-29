import React from 'react';
import './Card.css'

function Card(props) {


  if (props.name == 'testeo') {
    return null;
  } else {
    console.log(props);
    return (
        <div className="card" key={props.key}>
          <div className="card__image">
            <img
              className="card__image-background"
              src={props.background}
              alt={props.name}
            />
            <img
              className="card__imagen-icon"
              src={props.icon}
              alt={props.name}
            />
          </div>
          <div className="card__parrafo">
            <h3 className="card__titulo">{props.name}</h3>
            <p className="card__texto">Total Quizzes: {props.totalQuizzes}</p>
            <p className="card__texto">User: {props.users}</p>
          </div>
        </div>
  );
    }
}

export default Card;
