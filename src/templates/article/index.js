import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './index.scss';

const ArticleTemplate = ({ location, data }) => {
  return (
    <Layout className='article-template' location={location}>
      <SEO title='Article Template' />
      <p>Article template</p>
    </Layout>
  );
};

ArticleTemplate.defaultProps = {
  location: {},
  data: {},
};

ArticleTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default ArticleTemplate;
