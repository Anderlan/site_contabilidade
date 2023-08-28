import React from 'react';
import './style.css';

 function Card(props) {
  return (
    <div className="boxCard">
      <img className="imagemCard" src={ props.imagem } alt={ props.name }/>
      <div className="textCard">{ props.textCard }</div>
    </div>
  )
}

export default Card;