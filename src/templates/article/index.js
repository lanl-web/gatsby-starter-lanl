import React from 'react';
import PropTypes from 'prop-types';

import { Banner, BreadCrumbs, SocialBlock } from '@lanl-web/lanl-components';

import { StandardContent } from './StandardContent';
import { StandardHeading } from './StandardHeading';
import { StandardImage } from './StandardImage';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './index.scss';

const ArticleTemplate = ({ location, data }) => {
  const name = 'name';
  const marqueeImage =
    'https://cdn.lanl.gov/5f81937f-4b68-42c9-a57b-6cd2ee87cd28.jpeg';
  const introduction = 'introduction';
  const title = 'title';
  const shareLink = '';
  const page = {
    body: '<p>Body text here</p>',
    feature_image: {
      filename_disk: '5e5018f8-a0ff-4fda-9986-3e27ccac12cf.jpeg',
      description: 'This is a test caption',
    },
  };

  return (
    <Layout className='article-template' location={location}>
      <SEO title={name} />
      <Banner
        className='page-banner'
        featuredImage={marqueeImage}
        title={name}
      />

      <div className='wrapper'>
        <div className='header-content'>
          <BreadCrumbs
            className='p-0'
            location={location}
            homeName='Sustainability'
          />
          <StandardHeading introduction={introduction} title={title} />
        </div>

        <div className='main'>
          <div className='main-article'>
            <StandardImage story={page} />
            <StandardContent story={page} />
          </div>

          <div className='main-links'>
            <div className='social-section'>
              <h5 className='links-header'>Share</h5>
              <SocialBlock
                emailSubject={title}
                shareLink={shareLink}
                collapse={true}
              />
            </div>
          </div>
        </div>
      </div>
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
