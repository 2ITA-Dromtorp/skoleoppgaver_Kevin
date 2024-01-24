import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kurs from './kurs.js';
import LoginForm from './LoginForm';
import './App.css';

function Home() {
  return (
    <div className='hjem'>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurs" element={<Kurs />} />
      </Routes>
      <LoginForm />
    </Router>
  );
}

export default App;
