import React from "react";
import './style.css'

import Gardening from '../../assets/gardening2.jpg';

function Header() {
    return(
        <header className="headerApp">
        <img className="imgHeader" src={ Gardening } alt="Header"/>   
        <div className="MenuSuperior">
          <a href="/">Fale Conosco</a>
        </div>
    </header>
    );
}

export default Header;