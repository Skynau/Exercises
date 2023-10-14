import './App.css'
import { useEffect, useState } from 'react';
import Article from './components/article'

function App() {
  // const [count, setCount] = useState(0)
  //here I can fetch some data, for now hardcoding:
  const data = [
    {
      title: "Article 1",
      text: 'bla bla'
    },
    {
      title: "Article 2",
      text: 'blah blah'
    }
  ];

  const handleClickState = () => {
    setCount(count + 100)
  }

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect (() => {
    console.log('UseEffect');
  }, [name])

  console.log('rerender');

  return (
    <div>
      {/* <button onClick={handleClickState}>{`you clicked here ${count} times`}</button> */}
      {/* <Article title={data[0].title} text = {data[0].text}/>
      <Article title={data[1].title} text = {data[1].text}/> */}

      {data.map((article) => {
        return (
          <Article title={article.title} text={article.text}/>
        )
      })}

      {/* or shorter version: */}
      {/* {data.map((article) => <Article key={article.title} title={article.title} text={article.text}/>)} */}
      <br />
      <label>name:</label>
      {/* //The bellow is the controlled component (value and onchange) */}
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <br />
      <label>age:</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <button onClick={() => console.log(`button clicked ${name} and ${age}`)}>OK</button>

    </div>
  )
}

export default App
