import React from "react";

const renderStars = (rating) => {
  const totalStars = 5;

  return Array.from({ length: totalStars }, (_, i) => {
    const starValue = i + 1;

    return (
      <span
        key={i}
        style={{
          color: starValue <= rating ? "#f5c518" : "#ddd",
          fontSize: "18px",
          marginRight: "2px",
        }}
      >
        ★
      </span>
    );
  });
};

export default renderStars;