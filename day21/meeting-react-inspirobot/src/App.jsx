import { useState } from 'react'
import './App.css'
import QuotesData from './data/QuotesDate'
import GeneratorQuotes from './components/Quotes'

function App() {
  const [count, setCount] = useState(0)

  const NewQuote = () => {
    setCount(count + 1)
  }

    return (
      <>
        <h1>Random Quotes</h1>
        <div>
          <GeneratorQuotes quote={QuotesData[count].quote} author={QuotesData[count].author}/>
        </div>
        <button onClick={NewQuote}>Next Quote</button>
      </>
    )
}

export default App
