import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Banner,
  BreadCrumbs,
  SocialBlock,
  ContentBody,
  ContentIntroduction,
  ContentTitle,
} from '@lanl-web/lanl-components';

import { ArticleImage } from './ArticleImage';
import { replaceElements } from '../../utils';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './index.scss';

const ArticleTemplate = ({ location, data }) => {
  const name = 'name';
  const marqueeImage =
    'https://cdn.lanl.gov/5f81937f-4b68-42c9-a57b-6cd2ee87cd28.jpeg';
  const introduction =
    'Without adequate infrastructure, scholarly artifacts will vanish from the web in much the same way and with similar frequency &ldquo;regular&rdquo; web resources do.';
  const title = 'Scholarly Orphans';
  const shareLink = '';
  const page = {
    body: '<h1>This is a title</h1><h2>This is a subhead</h2><p>Some body text with an image from the CMS</p><img height="235" width="350" alt="51063015912 Ce92a87fd2 O" src="https://cdn.lanl.gov/5f81937f-4b68-42c9-a57b-6cd2ee87cd28.jpeg" class="image-left block-left"><p>More test</p>',
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
          <ContentTitle>{title}</ContentTitle>
          <ContentIntroduction>{introduction}</ContentIntroduction>
        </div>

        <div className='main'>
          <div className='main-article'>
            <ArticleImage story={page} />
            <ContentBody body={replaceElements(page?.body)} className='body' />
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

export const AllImageFilesFragment = graphql`
  fragment AllImageFiles on System {
    files(
      filter: {
        _or: [
          { type: { _contains: "jpg" } }
          { type: { _contains: "jpeg" } }
          { type: { _contains: "png" } }
          { type: { _contains: "gif" } }
        ]
      }
      limit: -1
    ) {
      id
      filename_disk
      type
      width
      height
      title
    }
  }
`;

export default ArticleTemplate;
