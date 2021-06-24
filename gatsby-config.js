require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { createLink } = require('./apollo');

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Discover LANL',
    description: 'Explore everything LANL is doing',
    author: '@lanl-web',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/includes";`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'System',
        fieldName: 'system',
        url: `${process.env.CMS_URL}/graphql/system/`,
        createLink,
        batch: true,
        dataLoaderOptions: {
          maxBatchSize: 10,
        },
      },
    },
  ],
};
