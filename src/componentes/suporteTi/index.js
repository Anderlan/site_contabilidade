import React from "react";
import "./style.css"

import ImgTi from "../../assets/imgleft.jpg";

function SuporteTi({children}) {
    return (
        <div className="containerService">
            <div className="containerCard">

                <div className="leftContainerCard">
                    <h1>Suporte de TI</h1>
                    <h2>Soluções Tecnológicas Sob Medida para Você! Presencial e Online</h2>
                    <p>O Suporte de TI garante o pleno funcionamento de seus sistemas e equipamentos com nosso serviço de Suporte de TI.
                        Nossa equipe de especialistas está pronta para resolver qualquer problema, desde questões simples até desafios complexos.
                        Mantenha sua infraestrutura tecnológica estável e produtiva com nosso suporte ágil e eficiente. Mantenha sua infraestrutura tecnológica estável
                        e produtiva com nosso suporte ágil e eficiente.
                    </p>

                    <ul>
                        <li>🔧 Montagem e Manutenção de Computadores;</li>
                        <li>💻 Formatação de Computadores e Equipamentos Periféricos;</li>
                        <li>💡 Consultoria em Orçamentos de Equipamentos de Tecnologia.</li>
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

export default SuporteTi;