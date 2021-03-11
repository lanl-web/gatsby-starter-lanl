import * as React from 'react';
import { Example } from '../components/Example';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LanlLogo from '../assets/svg/lanl_logo.inline.svg';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  Alert,
} from '@lawebteam/lanl-components';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <LanlLogo />
    <h1>Hi people</h1>
    <Example />
    <Alert>Some Alert</Alert>
    <MDBDropdown>
      <MDBDropdownToggle caret color='primary'>
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  </Layout>
);

export default IndexPage;
