import React from 'react';
import './style.css';

const Faq = () => {
    return (
        <div className='faq'>
            <h1 className="titulo_pf">Dúvidas <span>Frequentes</span></h1>

            <div className='descricoes'>
                <details>
                    <summary><h2>Planilhas:</h2></summary>
                    <ul>
                        <li>* Onde meu projeto pode ser desenvolvido? Desenvolvemos tanto no Excel como no Google Planilhas.</li>
                        <li>* Tenho suporte após o desenvolvimento? Sim, suporte de até 2 meses garantido para sanar dúvidas.</li>
                        <li>* É possível realizar alterações no meu projeto após a finalização? Sim, as alterações estão sujeitas a taxas de serviços.</li>
                        <li>* Como funciona o suporte? 100% remoto (vídeo chamada e contato via WhatsApp - necessário agendamento).</li>
                    </ul>               
                </details>
                <details>
                    <summary><h2>Suporte de TI:</h2></summary>
                    <ul>
                        <li>* O que é possível fazer no atendimento remoto? Solucionar problemas de baixa gravidade (Ex: Instalação de software e drives, limpeza do sistema, verificação de erros e teste de periféricos).</li>
                        <li>* Como funciona o atendimento presencial? Sujeito a agendamento e somente para análise, caso o equipamento apresente algum problema de hardware mais aprofundado, recolhemos a máquina para manutenção interna.</li>
                        <li>* Quero montar um computador como funciona o orçamento? Realizamos a análise de mercado conforme o nosso conhecimento técnico e apresentamos até 3 orçamentos baseados na necessidade do cliente. Nosso serviço de consultoria técnico é especializado em otimizar ao máximo o equipamento especifico para a sua necessidade.  </li>
                    </ul>             
                </details>

                <details>
                    <summary><h2>Suporte Administrativo:</h2></summary>
                    <ul>
                        <li>* Como funciona o suporte Administrativo? Tratativas 100% remota como organização de estrutura de pastas/arquivos. Elaboração e formatação de documentos internos personalizados.</li>
                        <li>* Como funciona os treinamentos? Realizamos treinamentos das ferramentas utilizadas por sua organização para melhor dinâmica entre as equipes.</li>
                    </ul>          
                </details>     
            </div>
        </div>
    );
}

export default Faq;


