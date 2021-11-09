import React from 'react';
import PropTypes from 'prop-types';

import {
  Banner,
  ContentBody,
  Panel,
  PanelGroup,
  Section,
  SectionHeader,
  SplitBanner,
  SplitBannerContent,
  SplitBannerImage,
} from '@lanl-web/lanl-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './index.scss';

const HomeTemplate = ({ location, data }) => {
  const featuredImage = '';
  const name = 'Home Template';
  const title = 'Title';
  const body = '<p>This is the body</p>';

  const bannerOne = {
    image: '',
    heading: 'Heading',
    subheading: 'Subheading',
    link: 'Link',
  };

  const iconLinkTwo = {
    title: 'Link Group 1',
    data: [
      { name: 'Link One', icon: '', url: 'www.example.com' },
      { name: 'Link Two', icon: '', url: 'www.example.com' },
      { name: 'Link Three', icon: '', url: 'www.example.com' },
      { name: 'Link Four', icon: '', url: 'www.example.com' },
    ],
  };

  const splitBannerThree = {
    image: '',
    heading: 'Heading',
    subheading: 'Subheading',
    link: 'Link',
  };

  const bannerFour = {
    image: '',
    heading: 'Heading',
    subheading: 'Subheading',
    link: 'Link',
  };

  const splitBannerFive = {
    image: '',
    heading: 'Heading',
    subheading: 'Subheading',
    link: 'Link',
  };

  const iconLinkSix = {
    title: 'Link Group 6',
    data: [
      { name: 'Link One', icon: '', url: 'www.example.com' },
      { name: 'Link Two', icon: '', url: 'www.example.com' },
      { name: 'Link Three', icon: '', url: 'www.example.com' },
      { name: 'Link Four', icon: '', url: 'www.example.com' },
    ],
  };

  const contact = {
    name: 'Lorem Ipsum',
    email: 'lorem@lanl.gov',
  };

  const renderBlockB = () => {
    return (
      splitBannerThree.heading && (
        <div className='block-b'>
          <SplitBanner>
            <SplitBannerImage imgUrl={splitBannerThree.image} />
            <SplitBannerContent
              title={splitBannerThree.heading}
              description={splitBannerThree.subheading}
              buttonLink={splitBannerThree.link}
              buttonText='Read More'
            />
          </SplitBanner>

          <Banner
            className='link-banner'
            featuredImage={bannerFour.image}
            title={bannerFour.heading}
            subtitle={bannerFour.subheading}
            btnLink={bannerFour.link}
          />
        </div>
      )
    );
  };

  const renderContactBlock = ({ email, name }) => {
    return (
      email && (
        <Section backgroundColor='white'>
          <div className='contact-block'>
            <h3 className='title'>Contact</h3>
            <p className='info'>
              {name} | <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </Section>
      )
    );
  };

  return (
    <Layout className='home-template' location={location}>
      <SEO title='Home Template' />

      <div className='hero-block'>
        <Banner
          className='home-banner'
          contentSide='center'
          featuredImage={featuredImage}
          title={name}
          contentMaxWidth={false}
          btnText=''
          btnLink=''
        />

        <Section className='intro-section' backgroundColor='white'>
          <h1 className='page-title'>{title}</h1>
          <ContentBody body={body} className='page-intro' isHTML />
        </Section>
      </div>

      <div className='block-a'>
        <Banner
          className='link-banner'
          contentSide='right'
          featuredImage={bannerOne.image}
          title={bannerOne.heading}
          subtitle={bannerOne.subheading}
          btnLink={bannerOne.link}
        />

        <Section backgroundColor='white'>
          <SectionHeader title={iconLinkTwo.title} />
          <PanelGroup divider>
            {iconLinkTwo.data.map(({ name, icon, url }) => (
              <Panel
                key={`icon-links-two-${name}`}
                link={url}
                icon={icon}
                title={name}
              />
            ))}
          </PanelGroup>
        </Section>
      </div>

      {renderBlockB()}

      <div className='block-c'>
        <SplitBanner>
          <SplitBannerImage imgUrl={splitBannerFive.image} />
          <SplitBannerContent
            title={splitBannerFive.heading}
            description={splitBannerFive.subheading}
            buttonLink={splitBannerFive.link}
            buttonText='Read More'
          />
        </SplitBanner>

        <Section backgroundColor='white'>
          <SectionHeader title={iconLinkSix.title} />
          <PanelGroup className='quick-links'>
            {iconLinkSix.data.map(({ name, icon, url }) => (
              <Panel
                key={`icon-links-six-${name}`}
                link={url}
                icon={icon}
                title={name}
              />
            ))}
          </PanelGroup>
        </Section>
      </div>

      {renderContactBlock(contact)}
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
