import { useState } from "react";

function EventForm({ addEvent }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addEvent(input);
    setInput(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new event..."
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default EventForm;
