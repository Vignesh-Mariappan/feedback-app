import React from 'react';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutLinkIcon from '../components/AboutLinkIcon';

const HomePage = ({ feedback, setFeedback }) => {
  return (
    <div>
      <FeedbackForm feedback={feedback} handleInsert={setFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={setFeedback} />
      <AboutLinkIcon />
    </div>
  );
};

export default HomePage;
