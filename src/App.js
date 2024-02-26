import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route component
import './App.css';
import Home from './userside/Home';
import Ticket from './userside/Ticket';

function App() {
  return (
    <div className="App">
    
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
         <Route path="/ticket" element={<Ticket/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
