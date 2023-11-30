import React from "react";

import "./style.css";

const Formulario = () => {
  return (
    <div className="formulario">
      <form
        action="https://formsubmit.co/contato@mello4all.com.br"
        method="POST"
      >
        <input type="hidden" name="_next" value="http://localhost:3000/site_contabilidade"></input>
        <div>
          <label for="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="Nome"
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="usuario@exemplo.com.br"
            required
          />
        </div>
        <div>
          <label for="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="Telefone"
            placeholder="(XX) XXXXX-XXXX"
            required
          />
        </div>
        <div>
          <label for="suporte">O suporte será para:</label>
          <select name="Suporte" id="suporte">
            <option value="Pessoa Física">Pessoa Física</option>
            <option value="Empresa">Empresa</option>
          </select>
        </div>
        <div>
          <label for="busca">O que busca?</label>
          <select name="Busca" id="busca">
            <option value="Planilhas Personalizadas">
              Planilhas Personalizadas
            </option>
            <option value="Suporte de TI">Suporte de TI</option>
            <option value="Suporte Administrativo">
              Suporte Administrativo
            </option>
            <option value="Suporte Acadêmico">Suporte Acadêmico</option>
          </select>
        </div>
        <div>
          <label for="msg">Mensagem:</label>
          <textarea
            id="msg"
            name="Mensagem"
            placeholder="Digite sua mensagem ..."
            required
          ></textarea>
        </div>
        <div className="botao_formulario">
            <button type="submit">Enviar sua mensagem</button>
        </div>
        
        <p>Entre em contato: contato@mello4all.com.br / (11) 96631-5654</p>        
        
      </form>
    </div>
  );
};

export default Formulario;
