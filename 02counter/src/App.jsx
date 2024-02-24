import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);
  let addValue= () =>{
    setCounter(counter+1);
  }
  let removeValue= () =>{
    setCounter(counter-1);
  }
  return (
    <>
     
      <h1>Hello Harsh</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}
      >
        <label>Add Value</label>
      </button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
