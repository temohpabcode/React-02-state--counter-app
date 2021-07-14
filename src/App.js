import React, { useState } from 'react';
import './style.css'

const App = () => {
    let [score, setScore] = useState(0)

    return (
        <>
            <h1>This is my counter App</h1>
            <h3>The value counter is {score}</h3>
            <button onClick={() => score < 25 && setScore(score + 1)}>Increment</button>
            <button onClick={() => score > 0 && setScore(score - 1)}>Decrement</button>
            <button onClick={() => setScore(0)}>Reset</button>
        </> 
    )
}

export default App;