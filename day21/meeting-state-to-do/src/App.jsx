import { useState } from 'react'
import { Toggle } from './components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle/>
    </>
  )
}

export default App
