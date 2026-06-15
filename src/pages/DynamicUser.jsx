import { useState, useEffect } from "react";

function DynamicUser() {
  // 1. User ID ko track karne ke liye state banayi (Shuruat 1 se hogi)
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  // 2. useEffect ab userId par nazar rakhega
  useEffect(() => {
    setLoading(true); // Naya data lane se pehle loading shuru karo
    
    // 🔥 Template Literal (``) use karke URL me dynamic userId daal di
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, [userId]); // 🔥 JADU: Jab-jab userId badlega, ye useEffect dobara chalega!

  return (
    <div style={{ marginTop: "25px", padding: "20px", border: "2px solid #e83e8c", borderRadius: "8px", textAlign: "center" }}>
      <h3>🚀 Industry Pattern: Dynamic Data Fetching</h3>
      <p style={{ fontWeight: "bold", color: "#e83e8c" }}>Current User ID: {userId}</p>

      {/* Conditional Rendering */}
      {loading ? (
        <p>Loading next user... ⏳</p>
      ) : (
        <div style={{ backgroundColor: "#fff5f5", padding: "15px", borderRadius: "5px", marginBottom: "15px" }}>
          <h4>👤 Name: {data.name}</h4>
          <p>📧 Email: {data.email}</p>
          <p>📞 Phone: {data.phone}</p>
        </div>
      )}

      {/* Button jo userId ko badhayega */}
      <button 
        onClick={() =>{
            if(userId>1){
                setUserId(userId-1)
            }
        }}
        style={{ padding: "10px 20px", backgroundColor: "#e83e8c", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}
      >
        Previous User ⬅️
      </button>
      <button 
        onClick={() =>{
            if(userId<10){
                setUserId(userId+1)
            }
        }}
        style={{ padding: "10px 20px", backgroundColor: "#e83e8c", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}
      >
        Next User ➡️
      </button>
    </div>
  );
}

export default DynamicUser;