import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/header';
import Services from './componentes/services';
import Paragraph from './componentes/paragraph';
import Footer from "./componentes/footer";
import SuporteTI from "./componentes/suporteTi";

function App() {
  return (
    <div className='App'>
      <Header />
      <Services />
      <Paragraph />
      <Footer />
      <SuporteTI />
      <Routes>
        <Route path="/suporteTi" element={<SuporteTI />} />
      </Routes>
    </div>
  );
}

export default App;
