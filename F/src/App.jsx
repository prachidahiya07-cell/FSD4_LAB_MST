import { useState, memo } from "react";

const EventCard = memo(function EventCard({ title }) {
  console.log("EventCard rendered:", title);

  return (
    <div>
      <h2>{title}</h2>
    </div>
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
    <div>
      <h1>Events</h1>

      {events.map((event) => (
        <EventCard key={event.id} title={event.title} />
      ))}

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;