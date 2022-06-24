import React from 'react';

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
