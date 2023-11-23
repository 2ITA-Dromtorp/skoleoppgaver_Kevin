import React from 'react';
import './App.css';


function App() {
  return (
    <div className="container">

      <div className='left'>

          <div className='box'> 
            <img src='path/to/image2.jpg' alt='Image 2' />
          </div>
          <div className='box'>
            <img src='path/to/image2.jpg' alt='Image 2' />
          </div>

      </div>
     
      <div className='right'>

          <div className='box'>
            <img src='path/to/image2.jpg' alt='Image 2' />
          </div>
          <div className='box'>
            <img src='path/to/image2.jpg' alt='Image 2' />
          </div>

      </div>
    </div>
  );
}

  export default App;
