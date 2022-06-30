import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { Products } from './Productos';
import { Detalle } from './Detalle';
import { Routes, Route, BrowserRouter as Router, Link, useParams } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/items" element={<Products />} />
      </Routes>
      <Routes>
        <Route path="/items/:id" element={<Detalle />} />
      </Routes>
    </div>
  );
}

export default App