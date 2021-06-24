require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { ApolloLink } = require('apollo-link');
const { createHttpLink } = require('apollo-link-http');
const { RetryLink } = require('apollo-link-retry');
const fetch = require('node-fetch');

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: 30000,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, operation) =>
      Boolean(error) && ![500, 400].includes(error.statusCode),
  },
});

const createLink = (pluginOptions) => {
  return ApolloLink.from([
    retryLink,
    createHttpLink({
      uri: pluginOptions.url,
      fetch,
      headers: {
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
      },
    }),
  ]);
};

module.exports = {
  createLink,
};
