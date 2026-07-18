import { useState } from "react";

function SearchFilter(){

    const fruits=['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes'];

    const [searchItem,setSearchItem]=useState("");

    return(
        <div style={{ padding: '20px' }}>
            <h2>Search Filter UI</h2>
            <input
            type="text"
            value={searchItem}
            placeholder="Search Fruits..."
            onChange={(e)=>setSearchItem(e.target.value)}
            style={{ padding: '8px', marginBottom: '15px', width: '200px' }}
            />

            <ul>
                {fruits
                .filter((fruit)=>
                    fruit.toLowerCase().includes(searchItem.toLowerCase())
                )
                .map((filterdItem,index)=>{
                    return <li key={index}>{filterdItem}</li>
                })
                }
            </ul>

        </div>
    )
}
export default SearchFilter