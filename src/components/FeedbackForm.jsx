import React, { useState } from 'react';
import Card from './shared/Card';
import SharedButton from './shared/SharedButton';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ handleInsert, feedback }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextChange = (event) => {
    if (event.target.value === '') {
      setBtnDisabled(true);
      setMessage('');
      console.log(message);
    } else if (event.target.value !== '' && event.target.value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Review should be at least 10 characters typed');
    } else {
      setBtnDisabled(false);
      setMessage('');
    }

    setText(event.target.value);
  };

  let ratingSelected = (rating) => {
    setRating(rating);
  };

  /* 
    on clicking the submit button in the form, the following method is called
  */
  const insertFeedback = (event) => {
    event.preventDefault();
    let newFeedback = {
      id: Date.now(),
      rating: rating,
      text: text,
    };

    // handleInsert method is nothing but the setFeedback useState function
    handleInsert([newFeedback, ...feedback]);

    // set the text to empty string after clicking the send button, hence the input box becomes empty and make the button disabled
    setText('');
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={insertFeedback}>
        <h2>How would you rate the book "Can't Hurt Me"</h2>
        <RatingSelect select={ratingSelected} />
        <div className='input-group'>
          <input type='text' placeholder='Write a review...' onChange={handleTextChange} value={text} />
          <SharedButton type='submit' version='primary' isDisabled={btnDisabled}>
            Send
          </SharedButton>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
