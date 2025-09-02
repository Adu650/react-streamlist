import { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import "../styles/CardGrid.css";

function Events({ events, updateEvent, deleteEvent, toggleComplete }) {
  const handleEdit = (id) => {
    const newTitle = prompt("Edit event title:");
    if (newTitle && newTitle.trim() !== "") {
      updateEvent(id, newTitle);
    }
  };

  return (
    <div>
      <h1>Events</h1>

      {events.length === 0 ? (
        <p>No events yet</p>
      ) : (
        <div className="grid">
          {events.map((event) => (
            <div key={event.id} className="card">
              <h3 style={{ marginBottom: 6 }}>{event.title}</h3>

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

                {/* ✅ / ↩️ Toggle Complete */}
                <button
                  title={event.completed ? "Undo" : "Complete"}
                  onClick={() => toggleComplete(event.id)}
                >
                  {event.completed ? "↩️" : "✅"}
                </button>

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

export default Events;