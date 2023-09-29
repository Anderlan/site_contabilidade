import React from "react";
import './style.css'

function Header() {
    return(
        <header className="backgroundImg">
            <navbar>
                <ul className="linkNav">
                    <li><a href="#footer">Fale Conosco</a></li> 
                </ul>
            </navbar>
            <div className="logoName">
                <a className="nome" href="http://localhost:3000/">Mello4All</a>
                <p>Transformamos a complexidade em simplicidade</p> 
            </div>
                       
        </header>
    );
}

export default Header;