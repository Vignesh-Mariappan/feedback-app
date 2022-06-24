import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  // get the feedback from the context
  let { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) return <p>No Feedback</p>;

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
