import React, { useState } from "react";
import Card from "../Card/Card";
import "./Timeline.css";

const Timeline = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const handleEventClick = (eventId, event) => {
    setSelectedEvent(eventId);
    setCardPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCloseCard = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="line-with-points">
      <div className="line"></div>
      {events.map((event, index) => (
        <div
          key={index}
          className={`point ${selectedEvent === event.id ? "selected" : ""}`}
          style={{ left: `${event.id}%` }}
          onClick={(e) => handleEventClick(event.id, e)}
        ></div>
      ))}
      {selectedEvent && (
        <Card
          event={events.find((event) => event.id === selectedEvent)}
          pointerPosition={cardPosition}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
};

export default Timeline;
