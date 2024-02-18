import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5)
  // let Counter = 5;
  const addValue = () => {
    if(Counter > 19){    
      setCounter(Counter);
    }
    else{
    console.log("Value Added",Math.random());
    Counter += 1;
    setCounter(Counter);
    //setCounter(Counter + 1);
    }
  }
  const decValue = () => {
    if(Counter < 1){    
      setCounter(Counter);
    }
    else{
      console.log("Value Decrease",Math.random());
      Counter -= 1;
      setCounter(Counter);
      //setCounter(Counter + 1);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {Counter}</h2>

      <button
      onClick={addValue}>Increase Value {Counter}</button>
      <br />
      <button onClick={decValue}>Decrease Value {Counter}</button>
    </>
  )
}

export default App
