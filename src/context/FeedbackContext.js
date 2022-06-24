import { createContext, useState } from 'react';

// create the new context for feedback
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Chief Goggins with his callous mind and an eternal amount of perseverance has shown how the so called IMPOSSIBLE is made possible. Strength and success to such warriors.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Only for those who would never settle for less in life',
    },
    {
      id: 3,
      rating: 10,
      text: ' Wow!!! An Uncommon Mentality to Achieve Uncommon Heights',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editFlag: false,
  });

  return <FeedbackContext.Provider value={{ feedback, setFeedback, feedbackEdit, setFeedbackEdit }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
