import React from 'react';
import image2 from './images/image2.jpg';
import './App.css';

function App() {
  const handleLogin = () => {
    console.log('');
  };

  return (
    <div className='loginbox'>
      <div className='logginn'>
        <h1> Vennligts logg inn før du fortsetter </h1>
        <button className='button'onClick={handleLogin}>Log in</button>
        <label htmlFor="username">Brukernavn eller Email</label>
        <input
            type="username"
            id="username"
            name="username"
            />
      </div>
    </div>
  );
}

export default App;
