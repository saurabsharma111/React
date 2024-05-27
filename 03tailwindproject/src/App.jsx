import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-6'>Tailwind test</h1>
      <Card username="Me and code" btnText="smash"/>
      <Card username="Saurab" btnText="click me"/> 
      //props or properties 
      <Card />
    </>
  )
}

export default App
