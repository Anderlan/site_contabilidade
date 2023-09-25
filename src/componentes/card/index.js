import React, { useState } from 'react';
import Modal from 'react-modal';
// import { Link } from 'react-router-dom';
import './style.css';

import SuporteTi from "../suporteTi";


// function comp_render(props){
//   const comp = props.name;
//     if (comp === "Suporte de TI"){
//       return <SuporteTi />;
//       }
// }

function Card(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function abrirModal() { setIsOpen(true); }
  function fecharModal() { setIsOpen(false); }

  // const [comp, setComp] = useState(props.name);
  
  function compRender(props) {
    if(props.textCard === "Suporte de TI"){
      return <SuporteTi />;
    }

    if(props.textCard === "Suporte administrativo"){
      return "Adm";
    }

    if(props.textCard === "Planilhas Personalizadas"){
      return "Planilhas";
    }
  }

  return (
    <div className="boxCard">
      <button onClick={abrirModal}>
        <img className="imagemCard" src={props.imagem} alt={props.name} />
        <div className="textCard">{props.textCard}</div>
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel={props.textCard} style={{ content: { backgroundColor: 'none', margin: '0', padding: '0', borderRadius: 0 } }}>
        <button className="buttonModal" onClick={fecharModal}>Fechar</button>
        {compRender(props)}
      </Modal>
    </div>
  );
}

export default Card;