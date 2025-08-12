import React, { useState } from "react";

function StreamList() {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added to list:", item);
    setItem("");
  };

  return (
    <div>
      <h1>My StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={item} 
          onChange={(e) => setItem(e.target.value)} 
          placeholder="Add a movie or show" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;