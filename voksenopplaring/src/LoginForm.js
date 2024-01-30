import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'gjest', password: 'gjest' },
  { username: 'user', password: 'pass' }
];

function LoginForm() {
  const [username, setUsername] = useState('gjest');
  const [password, setPassword] = useState('gjest');
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    const isAuthenticated = users.some((user) => user.username === username && user.password === password);

    if (isAuthenticated) {
      console.log('%cAutentisering vellyket. Vent litt til siden omdirigerer...', 'color: limegreen;');
      navigate('/kurs.js');
    } else {
      console.log('%cFeil passord eller brukernavn. Prøv på nytt', 'color: red;');
    }
  }

  return (
    <div className='loginbox'>
      <div className='logginn'>
        <h1> Vennligts logg inn før du fortsetter </h1>
        <form>
          <label htmlFor="username">Brukernavn eller Email</label>
          <input
            className='username'
            type="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Passord</label>
          <input
            className='password1'
            type="password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password1"
          />
          <button className='button' onClick={handleLogin}>Logg inn</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
