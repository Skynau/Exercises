import { useState } from 'react'
import './App.css'
import Question from './components/Question'
import DataQouro from './components/DataQouro'

const Qouro = () => {
  return (
    <>
    <h1>Qouro</h1>
    <Question title={DataQouro[0].title} question={DataQouro[0].question}/>
    <Question title={DataQouro[1].title} question={DataQouro[1].question}/>
    <Question title={DataQouro[2].title} question={DataQouro[2].question}/>
    </>
  )
}

export default Qouro
