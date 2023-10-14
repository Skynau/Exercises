import { useState } from 'react'
import './App.css'
import WeeklyForecast from './components/WeeklyForecast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Weekly Weather Forecast</h1>
          <WeeklyForecast />

      </div>
    </>
  )
  
}

export default App
