import React from 'react';
import './App.css';
import Header from './componentes/header';
import Services from './componentes/services';
import Paragraph from './componentes/paragraph';
import Footer from "./componentes/footer"

function App() {
  return (
    <div className='App'>
      <Header />
      <Services />
      <Paragraph />
      <Footer />
    </div>
  );
}

export default App;
