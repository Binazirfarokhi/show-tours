import React from "react"



export default function Practice() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
const [count, setCount] = React.useState(0)
  /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
// function decrement(){
//     setCount(count - 1)
// } if you wany
function decrement(){
    setCount(preCount=>preCount+1)
}
function increment(){
    setCount(preCount=>preCount+1)
}

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decrement}>{count}</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick ={increment}>{count}</button>
            </div>
        </main>
    )
}



