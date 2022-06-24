import React from 'react';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutLinkIcon from '../components/AboutLinkIcon';

const HomePage = ({ feedback, setFeedback }) => {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <AboutLinkIcon />
    </div>
  );
};

export default HomePage;
