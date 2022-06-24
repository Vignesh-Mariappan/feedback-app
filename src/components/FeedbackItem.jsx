import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ item: { id, rating, text }, handleDelete, feedback }) => {
  const deleteFeedback = () => {
    handleDelete(feedback.filter((item) => item.id !== id));
  };

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button onClick={deleteFeedback} className='close'>
        <FaTimes color='red' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
