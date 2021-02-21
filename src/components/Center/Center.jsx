import React from 'react';
import PropTypes from 'prop-types';
import CenteredDiv from './style';

const Center = ({ children, direction }) => {
  return <CenteredDiv direction={direction}>{children}</CenteredDiv>;
};

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  direction: PropTypes.string,
};

Center.defaultProps = {
  direction: 'row',
};

export default Center;
