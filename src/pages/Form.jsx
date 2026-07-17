import { useState } from "react";

function SimpleForm(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Form Sunmitted Successfully\nName:${name}\nEmail:${email}`)
        
        setEmail("")
        setName("")
    }

return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}> 
    <div>
        <label>Name:</label>
        <input
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder="Enter your Name"
        />
    </div>
    <div>
        <label>Email:</label>
        <input 
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder="Enter yhe email"
        />
    </div>
    <button type="submit">Submit data</button>

    </form>
)

}

export default SimpleForm