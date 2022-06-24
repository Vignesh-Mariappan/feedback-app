import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  // get the feedback from the context
  let { feedback } = useContext(FeedbackContext);

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
