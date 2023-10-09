import React from "react";
import './style.css'

import Gardening from '../../assets/gardening2.jpg';

function Header() {
    return(
        <header>
            <navbar>
                <ul className="linkNav">
                    <li><a href="#footer">Fale Conosco</a></li> 
                </ul>
            </navbar> 
            <img src={Gardening} alt="Gardening"></img>           
        </header>
    );
}

export default Header;