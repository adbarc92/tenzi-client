import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container">
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="flip-card-front">
          <h2>Front Side</h2>
          <p>Click to flip the card.</p>
        </div>
        <div className="flip-card-back">
          <h2>Back Side</h2>
          <p>This is the back side of the card.</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
