import React from 'react';
import './style.css';

function Card(props) {
  return (
    <a className="boxCard" href={props.link}>
      <img className="imagemCard" src={props.imagem} alt={props.name} />
      <div className="textCard">{props.textCard}</div>
    </a>
  );
}

export default Card;