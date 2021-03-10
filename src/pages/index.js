import * as React from 'react';
import { Example } from '../components/Example';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LanlLogo from '../assets/svg/lanl_logo.inline.svg';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <LanlLogo />
    <h1>Hi people</h1>
    <Example />
  </Layout>
);

export default IndexPage;
