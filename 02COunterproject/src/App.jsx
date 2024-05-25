import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const  addValue= () => {
    console.log("Value Added",counter);
    //counter = counter+1
    setCounter(counter+1)
  }
  const  removeCounter= () => {
    console.log("Value removed",counter);
    //counter = counter+1
    setCounter(counter-1)
  }



  return (
    <>
    <h1>Counter Project</h1>
    <h3>Counter value:{counter}</h3>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeCounter}>Remove Value {counter}</button>
    <p>Footer{counter}</p>
    </>
  )
}

export default App
