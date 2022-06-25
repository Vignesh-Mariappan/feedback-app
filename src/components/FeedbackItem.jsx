import React, { useContext } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item: { id, rating, text } }) => {
  // get the feedback from the context
  let { feedback, setFeedback, setFeedbackEdit } = useContext(FeedbackContext);

  const deleteFeedback = () => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const editFeedback = () => {
    setFeedbackEdit({
      item: {
        id: id,
        rating: rating,
        text: text,
      },
      editFlag: true,
    });
  };

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button onClick={deleteFeedback} className='close'>
        <FaTimes color='red' fontSize='1.5rem' />
      </button>
      <button className='edit' onClick={editFeedback}>
        <FaEdit color='blue' fontSize='1.5rem' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
