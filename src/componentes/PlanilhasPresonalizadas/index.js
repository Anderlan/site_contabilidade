import React from "react";
import "./style.css"

import ImgTi from "../../assets/imgleft.jpg";

function SuporteTi() {
    return (
        <div className="containerService">
            <div className="containerCard">
                
                <div className="leftContainerCard">
                    <h1>Planilhas Personalizadas</h1>
                    <h2>Transforme seus dados em insights valiosos com nossos serviços personalizados!</h2>
                    <p>Você já se deparou com a tarefa árdua de organizar e analisar grandes quantidades de dados? 
                       Nós temos a solução! Nossa equipe de especialistas em planilhas está pronta para criar planilhas personalizadas 
                       que atendam às suas necessidades específicas. Seja para acompanhamento de projetos, controle financeiro ou análise de vendas, 
                       nossas planilhas vão simplificar o processo e melhorar sua eficiência.
                    </p>

                    <ul>
                        <li>📊 Estrutura inteligente para inserção fácil e atualização de dados;</li>
                        <li>🔍 Visual atraente e intuitivo para análise rápida;</li>
                        <li>📚 Aulas particulares de Excel.</li>
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