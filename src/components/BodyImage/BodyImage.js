import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getImageUrl } from '../../utils';

export const BodyImage = (props) => {
  const { imgSrc, alt, width, height, className } = props;

  const classes = classNames('lanl-article-body-img', className);
  const image = getImageUrl(imgSrc);

  return (
    <img
      data-testid='lanl-article-body-img'
      alt={alt}
      src={image}
      loading='lazy'
      width={width}
      height={height}
      className={classes}
    />
  );
};

BodyImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  imgSrc: PropTypes.string,
  width: PropTypes.string,
};

export default BodyImage;
