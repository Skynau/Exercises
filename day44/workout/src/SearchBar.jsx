import { useState } from "react"

export default function SearchBar({searchQuery, setSearchQuery}) {
    
    const [textInput, setTextInput] = useState('')

    const handleInput = (event) => {
        setTextInput(event.target.value)
    }

    const sendInput = () => {
        setSearchQuery(textInput)
    }
    
    return (
        <>
            <input type="text" onChange={handleInput}/>
            <button onClick={sendInput}>Search</button>
        </>
    )
}