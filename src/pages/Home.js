import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // read from localStorage (no prop changes needed in App.js)
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const ev = localStorage.getItem("events");
    if (ev) setEvents(JSON.parse(ev));

    const sr = localStorage.getItem("searchResults");
    if (sr) setSearchResults(JSON.parse(sr));
  }, []);

  // pick a featured item for the streaming hero (from events first, else last search)
  const featured =
    (events && events[0]) ||
    (searchResults && searchResults[0]) || null;

  return (
    <div className="home">
      {/* Streaming / Hero area */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <h1 className="hero__title">Welcome to StreamList</h1>
          <p className="hero__subtitle">
            Track what you want to watch, mark completed movies, and explore new picks.
          </p>
          <div className="hero__cta">
            <Link to="/SearchPage" className="btn primary">Search Movies</Link>
            <Link to="/events" className="btn">View Events</Link>
            <Link to="/completed" className="btn">Completed</Link>
          </div>
        </div>

        {/* Mini “streaming” spotlight (poster or fallback) */}
        <div className="hero__spotlight">
          {featured ? (
            <>
              {featured.poster ? (
                <img src={featured.poster} alt={featured.title} />
              ) : (
                <div className="poster-fallback">No image available</div>
              )}
              <div className="spotlight__info">
                <h3>{featured.title}</h3>
                {featured.release_date && (
                  <p className="muted">{featured.release_date}</p>
                )}
                <Link to="/events" className="btn small">Continue</Link>
              </div>
            </>
          ) : (
            <div className="spotlight__empty">
              <p>No picks yet. Try a search to feature a title here.</p>
              <Link to="/SearchPage" className="btn small">Find something</Link>
            </div>
          )}
        </div>
      </section>

      {/* Quick actions */}
      <section className="section">
        <h2>Quick Actions</h2>
        <div className="grid quick">
          <Link to="/SearchPage" className="card quick-card">
            <span>🔎</span>
            <p>Find a movie</p>
          </Link>
          <Link to="/events" className="card quick-card">
            <span>🗂️</span>
            <p>Manage events</p>
          </Link>
          <Link to="/completed" className="card quick-card">
            <span>✅</span>
            <p>See completed</p>
          </Link>
          <Link to="/about" className="card quick-card">
            <span>ℹ️</span>
            <p>About</p>
          </Link>
        </div>
      </section>

      {/* Recent events preview */}
      <section className="section">
        <div className="section__header">
          <h2>Recent Events</h2>
          <Link to="/events" className="link">View all</Link>
        </div>
        {events && events.length ? (
          <div className="grid">
            {events.slice(0, 6).map((e) => (
              <div key={e.id} className="card">
                <h3>{e.title}</h3>
                {e.poster ? (
                  <img src={e.poster} alt={e.title} />
                ) : (
                  <div className="poster-fallback">No image</div>
                )}
                {e.release_date && (
                  <p className="muted">{e.release_date}</p>
                )}
                <div className="pill">{e.completed ? "Completed" : "Planned"}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">No events yet — add some from Search.</p>
        )}
      </section>

      {/* Suggestions based on last search */}
      <section className="section">
        <div className="section__header">
          <h2>Suggestions (Based on Last Search)</h2>
          <Link to="/SearchPage" className="link">Search again</Link>
        </div>
        {searchResults && searchResults.length ? (
          <div className="grid">
            {searchResults.slice(0, 6).map((m) => (
              <div key={m.id || m.title} className="card">
                <h3>{m.title}</h3>
                {m.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                    alt={m.title}
                  />
                ) : (
                  <div className="poster-fallback">No image</div>
                )}
                {m.release_date && <p className="muted">{m.release_date}</p>}
                <Link to="/SearchPage" className="btn small">Add more</Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">No recent searches yet.</p>
        )}
      </section>
    </div>
  );
}

export default Home;
