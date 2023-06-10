import React, { useRef, useEffect } from "react";
import "./Card.css";

const Card = ({ event, onClose, pointerPosition }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const cardRect = cardElement.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    const { x, y } = pointerPosition;

    let top = y - cardHeight - 10;
    let left = x - cardWidth / 2;

    // Adjust position to keep the card within the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (top < 0) {
      top = 10;
    } else if (top + cardHeight > viewportHeight) {
      top = viewportHeight - cardHeight - 10;
    }

    if (left < 0) {
      left = 10;
    } else if (left + cardWidth > viewportWidth) {
      left = viewportWidth - cardWidth - 10;
    }

    cardElement.style.top = `${top}px`;
    cardElement.style.left = `${left}px`;
  }, [pointerPosition]);

  return (
    <div className="card" ref={cardRef}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2 className="card-title">{event.title}</h2>
      <p className="card-text">{event.text}</p>
    </div>
  );
};

export default Card;
