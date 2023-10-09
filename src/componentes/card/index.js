import React, { useState } from 'react';
import Modal from 'react-modal';
// import { Link } from 'react-router-dom';
import './style.css';

import SuporteTi from "../SuporteTi";
import SuporteAdm from "../SuporteAdm";

import PlanilhasPresonalizadas from "../PlanilhasPresonalizadas";

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
      return <SuporteAdm />;
    }

    if(props.textCard === "Planilhas Personalizadas"){
      return <PlanilhasPresonalizadas />;
    }
  }

  return (
    <div>
      <button onClick={abrirModal} className="boxCard">
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