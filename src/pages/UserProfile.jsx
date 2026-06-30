import { useState } from "react";

function UserProfile(props) {
    const [isFollowed, setIsFollowed] = useState(false)

    return(
        <div style={{border: "2px solid #333", padding: "20px", borderRadius: "10px", width: "250px", margin: "10px auto", textAlign: "center"}}>
            <h2>Bande ka naam:{props.name}</h2>
            <p>city:{props.city}</p>
            <button
            onClick={()=>setIsFollowed(!isFollowed)}
            style={{ padding: "10px 15px", backgroundColor: isFollowed ? "green" : "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
       { isFollowed?"Following ✅":"Follow ➕"}
      </button>
        </div>
    );
}

export default UserProfile;