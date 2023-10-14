import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CatAPI from './components/Data'

function App() {


  return (
    <>
    <h3>Random cat fact</h3>
    <CatAPI />
    </>
  )
}

export default App
