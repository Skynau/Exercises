import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [facts, setFacts] = useState('')

  const loadData = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    setFacts()
   
  }
  loadData()
   return (
    <>
      <p>{facts}</p>
    </>
    )
  
}

export default App
