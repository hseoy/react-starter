import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../../style/globalStyle';

const ApplyGlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

ApplyGlobalStyle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ApplyGlobalStyle;
