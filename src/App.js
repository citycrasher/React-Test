import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React App</h1>
        <p>Welcome to your React application!</p>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>
              Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
              Decrement
            </button>
            <button onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </div>
        
        <div className="info-section">
          <p>This is a simple React app with:</p>
          <ul>
            <li>React 18</li>
            <li>Webpack configuration</li>
            <li>Hot reloading</li>
            <li>Basic styling</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
