import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobjj = {
    username: "Alex",
    age: 21
  }
  let arr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/*<Card username="Aklex" someobj = {myobjj} narr = {arr}/>*/}
      <Card username="Jiffin" btntxt="Click Me"/>
      <Card username="Alex" btntxt="Visit Me"/>
    </>
  )
}

export default App
