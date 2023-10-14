import React, { useState } from 'react'

const Question = ({title, question}) => {
    const [count, setCount] = useState(0)
    const LikingIt = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h3>{title}</h3>
            <p>{question}</p>
            <button onClick={LikingIt}>{`Article liked ${count}`}</button>
        </>
    )
}

export default Question