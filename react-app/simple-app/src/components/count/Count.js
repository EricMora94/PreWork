import React, { useState } from "react";
import './Count.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div className="container ">
            <div className="card">
                <h1 className="title">Simple React App </h1>
                <p className="counter"> Count: {count} </p>
                <div className="buttonsContainer">
                    <button onClick={increment} className="buttons"> Increment </button>
                    <button onClick={decrement} className="buttons"> Decrement </button>
                </div>
                {count >= 10 ? <p className="counter">Count is too high! </p> : <p className="helper">' C'</p>}
            </div>
        </div>
    )
}

export default Counter;