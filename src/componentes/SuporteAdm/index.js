import React from "react";
import "./style.css"

import ImgTi from "../../assets/imgleft.jpg";

function SuporteAdm() {
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
                            <li><a href="/" className="duvidasFrequentes">Dúvidas Frequentes</a></li>
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