import React, { useState } from 'react';
import './mainPage.css';
export default function MainPage() {
  const [like, setLikes] = useState(0);
  return (
    <>
      <div className="main-container">
        <div className="headerCardreverse">
          <div className="header">
            <h1>
              My
              {' '}
              <br />
              {' '}
              <span className="headerSpan">Event</span>
              {' '}
              <br />
              {' '}
              Scheduler
            </h1>
            <div className="description">
              Easily host and share events with your friends across any social
              media.
            </div>
          </div>
          <div className="eventCard">
            <div className="evemtImg">
              <img
                src="data:image/jpeg;base64,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"
                alt="movie event img"
                className="evemtImg"
              />
            </div>
            <div className="eventCardContenr">
              <h2 className="eventName">Night Movie</h2>
              <div className="hostName">
                <ion-icon name="person" />
                {' '}
                Hosted by:
                {' '}
                <span>Evans</span>
              </div>
              <div className="eventDetails">
                <div className="startTime">
                  <ion-icon name="alarm" />
                  start time:
                  {' '}
                </div>
                <div className="endTime">
                  <ion-icon name="stopwatch" />
                  end time:
                  {' '}
                </div>
                <div className="eventLocation">
                  <ion-icon name="pin" />
                  {' '}
                  Location:
                  {' '}
                </div>
              </div>
              <div className="likesContainer">
                <button type="button" className="likes" onClick={() => setLikes(like + 1)}>
                  {' '}
                  <ion-icon name="happy" />
                  {' '}
                </button>
                <div>{like}</div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="createButton">Create my event</button>
      </div>
    </>
  );
}