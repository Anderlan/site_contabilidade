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
            <p>Potencialize sua rotina comnossos serviços versáteis: suporte técnico, soluções de TI, assistência administrativa e elaboração de planilhas personalizdas para o seu negócio ou uso pessoal.</p>
            <div className="cards">
                <Card imagem = { Computer } name="Computer" link="http://localhost:3000/" textCard="Suporte de TI" />
                <Card imagem = { Business } name="Business" link="http://localhost:3000/" textCard="Suporte administrativo" />
                <Card imagem = { Presentation } name="Presentation" link="http://localhost:3000/"  textCard="Planilhas Personalizadas" />
            </div>
        </main>
    );
}

export default Services;