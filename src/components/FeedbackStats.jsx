import React from 'react';

const FeedbackStats = ({ feedback }) => {
  let avgRating = (
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');

  const headingStyles = { color: '#333' };

  return (
    <div className='feedback-stats'>
      <h4 style={headingStyles}>{feedback.length} Reviews</h4>
      <h4 style={headingStyles}>Average Rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
};

export default FeedbackStats;
