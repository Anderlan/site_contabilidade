import React from "react";

import "./style.css";

const Formulario = () =>  {
    return(
        <form>
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="usuario_nome" placeholder="Seu nome" required/>
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="usuario_email" placeholder="usuario@exemplo.com.br" required/>
            </div>
            <div>
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="usuario_telefone" placeholder="(XX) XXXXX-XXXX" required/>
            </div>
            <div>
                <label for="suporte">O suporte será para:</label>
                <select name="suporte" id="suporte">
                    <option value="pessoa_fisica">Pessoa Física</option>
                    <option value="empresa">Empresa</option>
                </select>
            </div>
            <div>
                <label for="busca">O que busca?</label>
                <select name="busca" id="busca">
                    <option value="planilhas_personalizadas">Planilhas Personalizadas</option>
                    <option value="suporte_tI">Suporte de TI</option>
                    <option value="suporte_administrativo">Suporte Administrativo</option>
                    <option value="suporte_acadêmico">Suporte Acadêmico</option>
                </select>
            </div>
            <div>
                <label for="msg">Mensagem:</label>
                <textarea id="msg" name="usuario_msg" placeholder="Digite uma mensagem..." required></textarea>
            </div>

            <div class="button">
                <button type="submit">Enviar sua mensagem</button>
            </div>

            Entre em contato:
            contato@mello4all.com.br
            (11) XXXXX-XXXX

        </form>
    );
    
}

export default Formulario;