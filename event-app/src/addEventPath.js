// import React from "react";
import "./addEventPath.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "./features/Events";
import { useNavigate } from "react-router-dom";

export const CreateEvent = () => {
  const navigate = useNavigate()
  const eventList = useSelector((state) => state.events.value);
  const dispatch = useDispatch();
  const [eventname, setEventName] = useState("");
  const [eventlocation, setEventLocation] = useState("");
  const submit = (event) =>{
    event.preventDefault();
    const events = { 
      id: eventList.length + 1,
      eventname,
      eventlocation,
      eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpqRO9mIjFkkLPF6wHr2ZhEd8eptDhaDk_Q&usqp=CAU"
    };
    dispatch(addEvent(events))
    navigate('/')
  }


  return (
    <div className ="form-container">
      <h1>Schedule your Event</h1>
      <div className="input">
        <label>Event name :</label>
        <input
          type="text"
          placeholder="event name"
          onChange={(event) => setEventName(event.target.value)}
        />
      </div>
      <div className="input">
        <label>Location :</label>
        <input
          type="text"
          placeholder="event location"
          onChange={(event) => setEventLocation(event.target.value)}
        />
      </div>
      <div className="action">
        <button
          onClick = {submit}
        >
          Add Event
        </button>
      </div>
    </div>
  );
};
