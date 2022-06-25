import React from 'react';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <div className='App'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </FeedbackProvider>
  );
}

export default App;
