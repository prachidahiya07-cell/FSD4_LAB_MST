import { useState, memo } from "react";
import "./App.css";

const EventCard = memo(function EventCard({ title }) {
  console.log("EventCard rendered:", title);

  return (
    <article className="event-card">
      <h2>{title}</h2>
    </article>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const events = [
    { id: 1, title: "React Workshop" },
    { id: 2, title: "JavaScript Seminar" },
    { id: 3, title: "Web Development Conference" },
  ];

  return (
    <main className="events-panel">
      <div className="panel-content">
        <header className="panel-header">
          <p className="eyebrow">Upcoming sessions</p>
          <h1>Events</h1>
          <p className="panel-description">
            A few good things to learn together.
          </p>
        </header>

        <section aria-label="Upcoming events" className="event-list">
          {events.map((event) => (
            <EventCard key={event.id} title={event.title} />
          ))}
        </section>
      </div>

      <footer className="counter-panel">
        <div className="count-display" aria-live="polite">
          <span className="count-label">Count</span>
          <span className="count-value">{count}</span>
        </div>
        <button
          className="increment-button"
          onClick={() => setCount((currentCount) => currentCount + 1)}
          type="button"
        >
          Increment Counter
        </button>
      </footer>
    </main>
  );
}

export default App;