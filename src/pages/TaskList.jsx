import { useState } from "react";

function TaskList(){

    const[tasks,setTasks]=useState(["JavaScript Seekhna","React Phodna"])

    const [inputValue,setInputValue]=useState("");
    
    const handleAddTask=()=>{
        if(inputValue.trim()==="") return;

        setTasks([...tasks,inputValue])
        setInputValue("");
   } ;

   return (
    <div style={{ marginTop: "25px", padding: "20px", border: "2px solid #6f42c1", borderRadius: "8px" }}>
      <h3>📝 Industry Level Dynamic List Management</h3>
      
      {/* Input Box aur Add Button */}
      <div style={{ marginBottom: "15px" }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Jo bhi type karoge, state me ave hoga
          placeholder="Naya task likho..." 
          style={{ padding: "8px", width: "60%", marginRight: "10px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "8px 15px", backgroundColor: "#6f42c1", color: "white", border: "none", cursor: "pointer" }}>
          Add Task ➕
        </button>
      </div>

      {/* Array ko map karke screen par dikhana (Looping) */}
      <ul style={{ textAlign: "left", maxWidth: "300px", margin: "0 auto" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ padding: "5px 0", fontSize: "18px" }}>
            🔹 {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;