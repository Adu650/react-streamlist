import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Completed from "./pages/Completed";
import About from "./pages/About";
import SearchPage from "./pages/SearchPage";
function App() {
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Load from localStorage on startup
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) setEvents(JSON.parse(storedEvents));

    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) setSearchResults(JSON.parse(storedResults));
  }, []);

  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Save search results to localStorage
  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
  }, [searchResults]);

  // Add new event
  const addEvent = (movie) => {
    const newEvent = {
      id: Date.now(),
      title: movie.title || "Untitled",
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : null,
      release_date: movie.release_date || "N/A",
      completed: false,
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  // Update event
  const updateEvent = (id, newText) => {
    if (!newText || newText.trim() === "") return;
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, title: newText } : e))
    );
  };

  // Delete event
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, completed: !e.completed } : e
      )
    );
  };  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
	
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={
              <Events
                events={events}
                updateEvent={updateEvent}
                deleteEvent={deleteEvent}
                toggleComplete={toggleComplete}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <Completed
                events={events.filter((e) => e.completed)}
                updateEvent={updateEvent}
                deleteEvent={deleteEvent}
                toggleComplete={toggleComplete}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/SearchPage"
            element={
              <SearchPage
                addEvent={addEvent}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          />
        </Routes>
	      </div>
    </Router>
  );
}

export default App;
