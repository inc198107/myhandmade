import React from 'react';
import './App.css';

function App(props) {
  return (
  <div>
    {props.children}
    <p>
      Helloow World!
    </p>
  </div>
  );
}

export default App;
