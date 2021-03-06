import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from '../../../utils';

import './ArticleImage.scss';

export const ArticleImage = ({ story }) => {
  const caption = story?.feature_image?.description ?? '';
  const image = getImageUrl(story?.feature_image?.filename_disk ?? '');
  const alt = story?.feature_image?.title ?? '';
  const height = story?.feature_image?.height ?? '';
  const width = story?.feature_image?.width ?? '';

  return (
    <div className='article-template-image'>
      <img
        alt={alt}
        src={image}
        loading='lazy'
        width={`${width}`}
        height={`${height}`}
      />
      <figcaption className='caption'>{caption}</figcaption>
    </div>
  );
};

ArticleImage.propTypes = {
  story: PropTypes.object.isRequired,
};

export default ArticleImage;
