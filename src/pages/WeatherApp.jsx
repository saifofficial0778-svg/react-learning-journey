import { useState, useEffect } from "react";

function WeatherApp() {
  // 1. Data store karne ke liye state banayi
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. useEffect ka use kiya API call karne ke liye
  useEffect(() => {
    // Fake/Free Public API jo user ki info deti hai (Testing ke liye best hai)
    fetch("https://jsonplaceholder.typicode.com/users/10")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData); // Data ko state me save kar liya
        setLoading(false); // Loading band kar di
      })
      .catch((error) => console.error("Error fetching data:", error));
  },[]); // 🔥 Yeh khali bracket [] sabse zyada zaroori hai!

  return (
    <div style={{ marginTop: "25px", padding: "20px", border: "2px solid #007bff", borderRadius: "8px", textAlign: "center" }}>
      <h3>🌐 Industry Concept: API Integration (`useEffect`)</h3>

      {/* Conditional Rendering: Jab tak data aa raha hai loading dikhao */}
      {loading ? (
        <p>Fetching data from server... ⏳</p>
      ) : (
        <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "5px" }}>
          <h4 style={{ color: "#007bff", margin: "5px 0" }}>👤 Client Name: {data.name}</h4>
          <p style={{ margin: "5px 0" }}>📧 Email: {data.email}</p>
          <p style={{ margin: "5px 0" }}>🏢 Company: {data.company.name}</p>
          <span style={{ fontSize: "12px", color: "green" }}>● Connected to Live API</span>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;