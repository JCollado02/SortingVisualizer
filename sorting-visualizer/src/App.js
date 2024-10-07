import React, { useState } from 'react';
import './App.css';
import { insertionSort } from './insertionSort';

function App() {
  // Random array of values
  const [array, setArray] = useState([20, 35, 50, 75, 100, 25, 60, 90]);
  const [isSorting, setIsSorting] = useState(false); // New state variable
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return(
    <div className= "App">
      <button
        onClick={() => insertionSort(array, setArray, delay, setIsSorting)}
        disabled={isSorting}
      >
        Insertion Sort
      </button>

      <div className="array-container">
        {array.map((value, idx) => (
          <div 
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
            ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
