import { useState } from "react";

function AdvanceTaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "React Basics Seekhna", isCompleted: true },
        { id: 2, text: "State Mastery Karna", isCompleted: false },
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleAddTask = () => {
        if (inputValue.trim() === "") return;

        const newTask = {
            id: Date.now(), // FIX: 'date' ki jagah 'id' kiya
            text: inputValue,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
        setInputValue("");
    };

    const toggleCompleted = (taskId) => { // Name fixed
        const updateTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(updateTasks);
    };

    const handleDeleteTask = (taskId) => {
        const updateTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updateTasks);
    };

    return (
        <div style={{ marginTop: "25px", padding: "20px", border: "2px solid #00c49f", borderRadius: "8px" }}>
            <h3>👑 Industry Pattern: Array of Objects State</h3>
            
            <div style={{ marginBottom: "15px" }}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Naya advanced task..." 
                    style={{ padding: "8px", width: "60%", marginRight: "10px" }}
                />
                <button onClick={handleAddTask} style={{ padding: "8px 15px", backgroundColor: "#00c49f", color: "white", border: "none", cursor: "pointer" }}>
                    Add ➕
                </button>
            </div>

            <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto", listStyleType: "none", padding: 0 }}>
                {tasks.map((task) => (
                    <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #eee" }}>
                        
                        <span 
                            onClick={() => toggleCompleted(task.id)} // FIX: Sahi function call kiya
                            style={{ 
                                cursor: "pointer", 
                                textDecoration: task.isCompleted ? "line-through" : "none", 
                                color: task.isCompleted ? "#aaa" : "#000" 
                            }}
                        >
                            {task.isCompleted ? "✅ " : "⏳ "} {task.text}
                        </span>
                        
                        <button 
                            onClick={() => handleDeleteTask(task.id)} 
                            style={{ padding: "2px 8px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdvanceTaskList; // FIX: Export name matching