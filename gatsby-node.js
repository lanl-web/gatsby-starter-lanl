require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const routes = require('./node/create-pages.js');
const nodes = require('./node/source-nodes');

exports.createPages = async function (helpers) {
  await routes.createPages(helpers);
};

exports.sourceNodes = async function (gatsby, options) {
  await nodes.sourceNodes(gatsby, options);
};
