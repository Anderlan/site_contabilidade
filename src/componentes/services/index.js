import React from "react";
import Card from "../card";
import "./style.css"

import Presentation from "../../assets/presentation.jpg";
import Business from "../../assets/business.jpg";
import Computer from "../../assets/computer.jpg";

function Services(){
    return(
        <main>
            <h1>Nossos Serviços</h1>
            <p>Potencialize sua rotina com nossos serviços versáteis: suporte técnico, soluções de TI, assistência administrativa e 
               elaboração de planilhas personalizadas para o seu negócio ou uso pessoal.</p>
            <div className="cards">
                <Card imagem = { Presentation } name="Presentation" textCard="Planilhas Personalizadas" />
                <Card imagem = { Business } name="Business" textCard="Suporte administrativo" />
                <Card imagem = { Computer } name="Computer" textCard="Suporte de TI" />        
            </div>
        </main>
    );
}

export default Services;