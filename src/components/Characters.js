import React, { useState } from 'react';
import Stars from './Stars';

function Characters() {
  const [rating, setRating] = useState(0);

  const handleStarSelect = (selectedRating) => {
    setRating(selectedRating);
  };

  const stars = Array(5)
    .fill()
    .map((_, index) => (
      <Stars
        key={index}
        selected={index < rating}
        onSelect={() => handleStarSelect(index + 1)}
      />
    ));

  const word = rating === 1 ? 'Terrible' : rating === 2 ? 'Not Bad' : rating === 3 ? 'Regular' : rating === 4 ? 'Very Good' : rating === 5 ? 'Best' : '';

  return (
    <div>
      <div  className='rating-stars'>{stars}</div>
      <p className='description'>{word}</p>
    </div>
  );
}

export default Characters;