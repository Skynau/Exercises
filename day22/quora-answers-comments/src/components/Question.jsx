import React, { useState } from 'react'
import { Answer } from './Answer'

const Question = ({title, question}) => {
    const [count, setCount] = useState(0)
    const LikingIt = () => {
        setCount(count + 1)
    }

    const [comment, setComment] = useState('')

    const makeComment = () => {
        setComment('')
    }

    return (
        <>
            <h3>{title}</h3>
            <p>{question}</p>
            <Answer text={comment}/>
            <button onClick={LikingIt}>{`Article liked ${count}`}</button>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} cols="50" rows="5"></textarea>
            <button onClick={makeComment}>Submit</button>
        </>
    )
}

export default Question