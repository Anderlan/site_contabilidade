import React from 'react';
import Modal from 'react-modal';
import './style.css';

import SuporteTi from "../suporteTi";

function Card(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div className="boxCard">
      <button onClick={abrirModal}>
        <img className="imagemCard" src={props.imagem} alt={props.name} />
        <div className="textCard">{props.textCard}</div>
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel={props.textCard} style={{content: {backgroundColor: 'none', margin: '0', padding: '0', borderRadius: 0}}}>
        <button className="buttonModal" onClick={fecharModal}>Fechar</button>
        <SuporteTi />        
      </Modal>
    </div>
  );
}

export default Card;