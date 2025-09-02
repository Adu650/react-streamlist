import React from "react";
import "../styles/CardGrid.css";

function Completed({ events, updateEvent, deleteEvent, toggleComplete }) {
  const handleEdit = (id) => {
    const newTitle = prompt("Edit event title:");
    if (newTitle && newTitle.trim() !== "") {
      updateEvent(id, newTitle);
    }
  };

  return (
    <div>
      <h1>Completed Events</h1>

      {events.length === 0 ? (
        <p>No completed events yet</p>
      ) : (
        <div className="grid">
          {events.map((event) => (
            <div key={event.id} className="card" style={{ background: "#f0fff4" }}>
              <h3 style={{ marginBottom: 6, textDecoration: "line-through" }}>
                {event.title}
              </h3>

              {event.poster ? (
                <img src={event.poster} alt={event.title} />
              ) : (
                <div className="poster-fallback">No image available</div>
              )}

              {event.release_date && (
                <p style={{ margin: "4px 0 8px", color: "#6b7280" }}>
                  {event.release_date}
                </p>
              )}

              <div className="event-actions">
                {/* ✏️ Edit */}
                <button title="Edit" onClick={() => handleEdit(event.id)}>✏️</button>

                {/* ↩️ Undo (toggle back to active) */}
                <button title="Undo" onClick={() => toggleComplete(event.id)}>↩️</button>

                {/* 🗑️ Delete */}
                <button title="Delete" onClick={() => deleteEvent(event.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Completed;
