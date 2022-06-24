import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutLinkIcon = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion fontSize='2rem' />
      </Link>
    </div>
  );
};

export default AboutLinkIcon;
