require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async function ({ actions, graphql }) {
  // const { data } = await graphql(`
  //     query {
  //       directus {
  //       }
  //     }
  //   `);
  // actions.createPage({
  //   path: `/${pageMapSlug}/`,
  //   component: require.resolve('../src/templates/page_map.js'),
  //   context: {
  //     slug: pageMapSlug,
  //     status: approvalStatus,
  //     title: indexPageTitle,
  //   },
  // });
};
