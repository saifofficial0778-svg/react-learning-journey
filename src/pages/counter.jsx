import { useState } from "react";

function Counter() {
  // count -> current value hai
  // setCount -> function hai jo count ko badlega
  // useState(0) -> matlab count ki shuruat 0 se hogi
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "2px dashed #28a745" }}>
      <h3>🔥 Live Counter (State Demo)</h3>
      <h1 style={{ fontSize: "48px", margin: "10px 0" }}>{count}</h1>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", marginRight: "10px" }}
      >
        Increase ➕
      </button>

      <button 
        onClick={() =>{
            if(count>0){
                setCount(count-1)
            }
        }} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px" }}
      >
        Decrease ➖
      </button>
    </div>
  );
}

export default Counter;