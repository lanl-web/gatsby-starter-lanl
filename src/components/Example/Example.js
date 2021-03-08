import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Example.scss';

export const Example = (props) => {
  const {} = props;

  const exampleClasses = classNames('example');

  return (
    <div className={exampleClasses} data-testid='lanl-example'>
      Example Component
    </div>
  );
};

Example.defaultProps = {};

Example.propTypes = {};

export default Example;
