import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'

function App() {

  const [boxTop, setBoxTop] = useState(500)
  const [boxLeft, setBoxLeft] = useState(500)

  const changeBoxTop = (value) => {
    setBoxTop(boxTop-value)
  }

  const changeBoxLeft = (value) => {
    setBoxLeft(boxLeft-value)
  }

  return (
    <>
      <Box boxTop={boxTop} boxLeft={boxLeft}/>
      <button onClick={() => changeBoxTop(25)}>UP</button>
      <button onClick={() => changeBoxTop(-25)}>DOWN</button>
      <button onClick={() => changeBoxLeft(25)}>LEFT</button>
      <button onClick={() => changeBoxLeft(-25)}>RIGHT</button>
    </>
  )
}

export default App
