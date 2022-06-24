import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { Products } from './Productos';
import { Detalle } from './Detalle';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Routes>
        <Route path="/Detalle" element={<Detalle />} />
      </Routes>
    </div>
  );
}
   
export default App