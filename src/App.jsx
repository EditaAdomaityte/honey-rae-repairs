import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0) // returns array [stateVariable, setterFunction] with index 0 holding the value of our state nd a function to set our state

  const handleButtonCLick=()=>{
   setCount(count +1)
    console.log(count)}

  return (<>
    <h1> Helloooooo</h1>
    <div>This is amazing</div>

    <button className="btn-secondary" onClick={handleButtonCLick}>Click me</button>
    <div>Count {count}</div>

  </>)

}
//onClick={() => {}} passing anonymous function when button is clicked

// className instead of class <- for styling


