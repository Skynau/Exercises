import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const [offSet, setOffset] = useState(0)
  
    const loadData = async () => {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offSet}`);
      const data = await response.json();
      setSearchResults(data.query?.search);
    }

    useEffect(() => {
      loadData()
    }, [searchQuery, offSet])

    return (
      <>
        <SearchBar searchQuery = {searchQuery} setSearchQuery = {setSearchQuery} />
        <SearchResults searchResults = {searchResults} />
        <button onClick={() => (offSet >= 10 ? setOffset(offSet-10) : "")}>PREV</button>
        <button onClick={() => (setOffset(offSet+10))}>NEXT</button>
      </>
    )

}

export default App
