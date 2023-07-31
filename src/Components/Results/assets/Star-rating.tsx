// StarRating.jsx

import React, { useState } from 'react';

// Define the prop type for onRatingChange
type StarRatingProps = {
  onRatingChange: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "staron" : "staroff"}
            onClick={() => {
              setRating(index);
              onRatingChange(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
