import React from 'react';
import PropTypes from 'prop-types';

import './StandardHeading.scss';

export const StandardHeading = ({ introduction, title }) => {
  return (
    <div className='standard-template-heading'>
      <h1 className='title'>{title}</h1>
      <h2 className='introduction'>{introduction}</h2>
    </div>
  );
};

StandardHeading.defaultProps = {};

StandardHeading.propTypes = {
  introduction: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default StandardHeading;
