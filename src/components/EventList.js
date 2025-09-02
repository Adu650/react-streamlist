import { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

function EventList({ events, updateEvent, deleteEvent, toggleComplete }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    updateEvent(id, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <ul style={{ marginTop: "15px" }}>
      {events.map((event) => (
        <li
          key={event.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: event.completed ? "#d1f7d1" : "white",
            textDecoration: event.completed ? "line-through" : "none"
          }}
        >
          {editId === event.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ flex: 1, marginRight: "8px" }}
            />
          ) : (
            <span>{event.text}</span>
          )}

          <div style={{ display: "flex", gap: "12px" }}>
            {editId === event.id ? (
              <button onClick={() => handleUpdate(event.id)}>Save</button>
            ) : (
              <>
                {/* Complete button */}
                <button
                  onClick={() => toggleComplete(event.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  <FaCheck color="green" />
                  <span>Done</span>
                </button>

                {/* Edit button */}
                <button
                  onClick={() => handleEdit(event.id, event.text)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  <FaEdit color="blue" />
                  <span>Edit</span>
                </button>

                {/* Delete button */}
                <button
                  onClick={() => deleteEvent(event.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "12px"
                  }}
                >
                  <FaTrash color="red" />
                  <span>Delete</span>
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
