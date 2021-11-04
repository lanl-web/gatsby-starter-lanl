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

  // This is a placeholder for create pages
  const createPageTemplate = [
    { slug: 'article-template', template: 'article' },
    { slug: 'home-template', template: 'home' },
  ];

  createPageTemplate.forEach(({ slug, template }) => {
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve(`../src/templates/${template}/index.js`),
      context: {
        slug: slug,
      },
    });
  });
};
