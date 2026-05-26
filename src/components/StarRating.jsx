import React, { useState } from "react";

// User click kare ⭐ rating dene ke liye
function StarRating({ onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="star-rating">

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= (hover || rating) ? "star active" : "star"}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}

      <span className="rating-text">
        {rating} out of 5
      </span>

    </div>
  );
}

export default StarRating;