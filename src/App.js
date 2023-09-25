import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/home';
// import SuporteTi from './componentes/suporteTi';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/SuporteTi" element={<SuporteTi />}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
