import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

function Home() {
  const eventList = useSelector((state) => state.events.value);

  return (
    <div className="App">
      <div>
        {eventList.map((event) => (
          <div key={event.id} className="eventCard">
            <h1>{event.eventname}</h1>
            <p>Event location : {event.eventlocation}</p>
            <Link to='/addEventPath'>Add Event</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
