import React from 'react'
import PropTypes from 'prop-types';

export const TypographyHeading = ({ level, children }) => React.createElement(`h${level}`, null, children);

TypographyHeading.propTypes = {
    level: PropTypes.string,
    children: PropTypes.node.isRequired,
};
  