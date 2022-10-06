import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./mainPage.css";
export default function MainPage() {
  const [like, setLikes] = useState(0);
  const eventList = useSelector((state) => state.events.value);
  return (
    <>
      <div className="main-container">
        <div className="headerCardreverse">
          <div className="header">
            <h1>
              My <br /> <span className="headerSpan">Event</span> <br />{" "}
              Scheduler
            </h1>
            <div className="description">
              Easily host and share events with your friends across any social
              media.
            </div>
          </div>
          <div className="cards-container">
            {eventList.map((event) => (
              <div key={event.id} className="eventCard">
                <div className="Img-container">
                  <img
                    src={event.eventImage}
                    alt="movie event img"
                    className="Img"
                  />
                </div>
                <div className="eventCardContenr">
                  <h2 className="eventName">{event.eventname}</h2>
                  <div className="hostName">
                    <ion-icon name="person" /> Hosted by: <span>Evans</span>
                  </div>
                  <div className="eventDetails">
                    <div className="startTime">
                      <ion-icon name="alarm" />
                      start time:{" "}
                    </div>
                    <div className="endTime">
                      <ion-icon name="stopwatch" />
                      end time:{" "}
                    </div>
                    <div className="eventLocation">
                      <ion-icon name="pin" /> Location:
                      {event.eventlocation}
                    </div>
                  </div>
                  <div className="likesContainer">
                    <button
                      type="button"
                      className="likes"
                      onClick={() => setLikes(like + 1)}
                    >
                      {" "}
                      <ion-icon name="happy" />{" "}
                    </button>
                    <div>{like}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link to="/addEventPath" className="createButton">
          Create Event
        </Link>
      </div>
    </>
  );
}
