import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ appTitle, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{appTitle}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  appTitle: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, .8)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  appTitle: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
