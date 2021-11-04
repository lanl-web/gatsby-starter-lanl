import React from 'react';
import PropTypes from 'prop-types';

import { ContentBody } from '@lanl-web/lanl-components';
import { replaceElements } from '../../../utils';

import './StandardContent.scss';

export const StandardContent = ({ story }) => {
  const body = story?.body ?? '';
  return (
    <div className='standard-template-content'>
      <div className='body'>
        <div className='body-copy'>
          <ContentBody body={replaceElements(body)} />
        </div>
      </div>
    </div>
  );
};

StandardContent.defaultProps = {};

StandardContent.propTypes = {
  story: PropTypes.object.isRequired,
};

export default StandardContent;
