import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './index.scss';

const HomeTemplate = ({ location, data }) => {
  return (
    <Layout className='home-template' location={location}>
      <SEO title={'Home Template'} />
      <p>Home template</p>
    </Layout>
  );
};

HomeTemplate.defaultProps = {
  location: {},
  data: {},
};

HomeTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default HomeTemplate;
