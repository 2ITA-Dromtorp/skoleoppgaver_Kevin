import React from 'react';
import styles from 'react';
import './App.css';

function App() {
  return (
    <div className="navbar">
      <li style={styles.navItem}><a href="Hjem">Hjem</a></li>
      <li style={styles.navItem}><a href="about">Om kurset</a></li>
      <li style={styles.navItem}><a href="contact">Kontakt oss</a></li>
    </div>
  );
}

export default App;
