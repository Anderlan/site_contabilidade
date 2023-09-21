import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Header from './componentes/header';
import Services from './componentes/services';
import Paragraph from './componentes/paragraph';
import Footer from "./componentes/footer";
// import SuporteTI from "./componentes/suporteTi";
import TelaModal from "./componentes/modal";

import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Services />
            <Paragraph />
            <Footer />
            <TelaModal />
        </div>
    );
}

export default App;
