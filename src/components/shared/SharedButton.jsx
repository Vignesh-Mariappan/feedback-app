import React from 'react';
import PropTypes from 'prop-types';

const SharedButton = ({ type, version, isDisabled, children }) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

SharedButton.defaultProps = {
  version: 'primary',
  disabled: false,
  type: 'button',
};

export default SharedButton;
