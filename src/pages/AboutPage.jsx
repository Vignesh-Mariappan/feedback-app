import React from 'react';
import Card from '../components/shared/Card';
import { FaReact, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h2>About Feedback UI</h2>
        <p>This app is to leave feedback for the book "Can't hurt me" by David Goggins.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end' }}>
          <span>Powered by React</span> <FaReact fontSize='32px' color='#61dafb' />
        </p>
        <Link to='/' style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start', color: 'black' }} className='home-link'>
          <FaArrowLeft className='home-link-left-arrow' />
          Back to Home Page
        </Link>
      </div>
    </Card>
  );
};

export default AboutPage;
