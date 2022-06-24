import React, { useState } from 'react';
import Header from './components/Header';
import feedbackdata from './data/feedbackdata';
import AboutPage from './pages/AboutPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const [feedback, setFeedback] = useState(feedbackdata);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage feedback={feedback} setFeedback={setFeedback} />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
