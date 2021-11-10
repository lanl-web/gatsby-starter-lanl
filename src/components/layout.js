/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './layout.scss';
import { Footer, Header } from '@lanl-web/lanl-components';

const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <Helmet>
        <script
          type='text/javascript'
          src='https://siteimproveanalytics.com/js/siteanalyze_6024875.js'
          async
        ></script>
      </Helmet>
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
