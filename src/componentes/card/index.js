import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Card(props) {
  return (
    <div className="boxCard">
      <img className="imagemCard" src={props.imagem} alt={props.name} />
      <div className="textCard">{props.textCard}</div>
      <Link to="/suporteTi">Teste</Link>
    </div >
  )
}

export default Card;