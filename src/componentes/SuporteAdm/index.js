import React, { useState } from "react";
import "./style.css";
import Modal from 'react-modal';
import Faq from "../faq";

import ImgTi from "../../assets/imgleft.jpg";

function SuporteAdm() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function abrirModal() { setIsOpen(true); }
    function fecharModal() { setIsOpen(false); }

    return (
        <div className="containerService">
            <div className="containerCard">                
                <div className="leftContainerCard">
                    <h1>Suporte Administrativo</h1>
                    <h2>Impulsione seu Negócio com Nosso Suporte!</h2>
                    <p>Sabemos o quanto cada minuto é importante para você como empreendedor. 
                       É por isso que oferecemos serviços de suporte administrativo sob medida para pequenas e médias empresas, 
                       liberando seu tempo para o que realmente importa: expandir seus horizontes e alcançar o sucesso.
                    </p>

                    <ul>
                        <li>📄Criação de Relatórios Precisos;</li>
                        <li>🛠️Treinamento Especializado em Ferramentas;</li>
                        <li>📁 Suporte Administrativo Ágil.</li>
                    </ul>
                    <div className="botoes">
                        <ul>    
                            <li><a href="/" className="saibaMais">Saiba Mais</a></li>
                            <li>
                                <button onClick={abrirModal} className="duvidasFrequentes">
                                    Dúvidas Frequentes
                                </button>
                                <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel="Dúvidas Frequentes" style={{ content: { backgroundColor: "whitesmoke", margin: '0', padding: '0', borderRadius: 0 } }}>
                                    <button className="button_Modal_pf" onClick={fecharModal}>Fechar</button>
                                    < Faq />
                                </Modal>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className="rightContainerCard">
                    <img className="imagesRight" src={ImgTi} alt="ImgTi"></img>
                </div>
            </div>
        </div>
    );
}

export default SuporteAdm;