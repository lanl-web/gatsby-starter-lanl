import * as React from 'react';
import { Example } from '../components/Example';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <Example />
  </Layout>
);

export default IndexPage;
