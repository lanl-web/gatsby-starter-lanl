const ms = require('ms');
const invariant = require('invariant');
const { sourceNodes } = require('@lnfusion/gatsby-source-graphql');
const { createLink } = require('../apollo');

const CMS_URL = process.env.CMS_URL;
const DIRECTUS_GRAPHQL = {
  createLink,
  batch: true,
  dataLoaderOptions: {
    maxBatchSize: 10,
  },
};

/**
 * Normalizes Directus urls.
 */
function normalizeEndpoint(endpoint, query = {}) {
  const url = new URL(endpoint);
  if (!url.pathname.endsWith('/')) {
    url.pathname = `${url.pathname}/`;
  }

  Object.entries(query)
    .filter(([, value]) => value !== undefined)
    .forEach(([key, value]) => url.searchParams.set(key, value));

  try {
    const prefix = url.pathname == '/' ? '' : '.';

    const graphql = new URL(`${prefix}/graphql`, url.toString());
    graphql.hash = url.hash;
    graphql.search = url.search;

    const base = new URL(`${prefix}/`, url.toString());
    base.hash = url.hash;
    base.search = url.search;

    return {
      graphql: graphql.toString(),
      base: base.toString(),
    };
  } catch (err) {
    return null;
  }
}

/**
 * Gatsby source implementation.
 */
exports.sourceNodes = async (gatsby, options) => {
  const {
    url = CMS_URL,
    dev,
    graphql = DIRECTUS_GRAPHQL,
    auth,
    type = {},
    ...opts
  } = options;
  invariant(
    url && url.length > 0,
    '`gatsby-source-directus` requires option `url` to be specified',
  );

  let endpointParams = {};

  let endpoints = normalizeEndpoint(url, endpointParams);
  invariant(
    endpoints !== null,
    '`gatsby-source-directus` requires a valid `url`',
  );

  let refreshInterval =
    typeof dev?.refresh === 'string'
      ? ms(dev.refresh) / 1000
      : dev?.refresh || 15;
  invariant(
    !Number.isNaN(refreshInterval),
    '`gatsby-source-directus` requires a valid `dev.refresh` to be specified.\n' +
      'can be either a number (seconds) or a string (5s, 1m, ...)',
  );

  const headers = async () => {
    let obj = {};
    if (typeof graphql?.headers === 'object') {
      Object.assign(obj, graphql?.headers || {});
    } else if (typeof graphql?.headers === 'function') {
      Object.assign(obj, (await graphql?.headers()) || {});
    }

    if (!hasToken) {
      return obj;
    }

    return Object.assign(obj, {
      Authorization: `Bearer ${auth?.token}`,
    });
  };

  return await sourceNodes(gatsby, {
    ...graphql,
    ...opts,
    url: `${endpoints.graphql}`,
    typeName: type.name || 'DirectusData',
    fieldName: type.field || 'directus',
    moduleName: 'gatsby-source-directus',
    moduleSource: 'DirectusSource',
    refreshInterval,
    headers,
  });
};
