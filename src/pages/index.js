import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LanlLogo from '../assets/svg/lanl_logo.inline.svg';
import { Alert } from '@lanl-web/lanl-components';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <LanlLogo />
    <h1>Hi people</h1>
    <Alert>Some Alert</Alert>
  </Layout>
);

export default IndexPage;
