import { useState } from "react";

function Counter(){
  const [count,setCount]=useState(1);
  const[click,setClick]=useState(0)

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Current Count: {click}</p>
      <button onClick={()=>{
         setCount(count*2) 
         setClick(click+1)
         }}>Increment</button>
      <button onClick={()=>{
        if (count>=2){
          setCount(count/2)
        }
        if(click>0){
          setClick(click-1)
        }
      }}>Decrement</button>
    </div>
  )
}
export default Counter;