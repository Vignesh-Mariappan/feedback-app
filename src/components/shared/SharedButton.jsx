import React from 'react';

const SharedButton = ({ type, version, isDisabled, children, styling }) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled} style={styling}>
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
