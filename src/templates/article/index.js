import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Banner,
  BreadCrumbs,
  ContactsBlock,
  ContentBody,
  ContentIntroduction,
  ContentTitle,
  SocialBlock,
} from '@lanl-web/lanl-components';

import { ArticleImage } from './ArticleImage';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './index.scss';
import { replaceElements } from '../../utils';
import classNames from 'classnames';

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

  const contacts = [
    {
      name: 'Lorem Ipsum',
      mail_stop: 'Mail Stop 1',
      email: 'lorem@lanl.gov',
    },
    {
      name: 'Lorem Ipsum',
      mail_stop: 'Mail Stop 2',
      email: 'lorem@lanl.gov',
    },
  ];

  const hideContacts = contacts.length === 0 ? 'hide-contacts-block' : '';

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
            <div className='body'>
              <ContentBody body={replaceElements(page?.body)} />
              <ContactsBlock
                dividerTop
                contacts={contacts}
                className={`contacts-body ${hideContacts}`}
              />
            </div>
          </div>

          <div className='main-links'>
            <div className='social-section'>
              <h5 className='links-header'>Share</h5>
              <SocialBlock
                emailSubject={title}
                shareLink={shareLink}
                collapse={true}
              />
              <ContactsBlock
                dividerTop
                contacts={contacts}
                className={`contacts-sidebar ${hideContacts}`}
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
