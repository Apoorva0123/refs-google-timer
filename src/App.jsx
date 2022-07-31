import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [counter , setCounter] = useState(0);
  const counterRef = useRef(null);
  const startInterval = () => {
    counterRef.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000)
  }
  useEffect(() => {
      startInterval();
      
  }, [])
  
  return (
    <div className='App'>
      <h3>Timer: {counter}</h3>
      <button onClick={() => {
        clearInterval(counterRef.current);
      }}>Pause</button>

      <button onClick={() => {
        startInterval();
      }}>Start</button>

      <button onClick={() => {
        clearInterval(counterRef.current);
        setCounter(0);
      }}>Reset</button>

    </div>
  )
}

export default App;

//1. Store the value and do not lose it when component is re-rendering
//2. change in this value should not cause re-render