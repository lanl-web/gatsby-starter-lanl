export const publishedFilter = (data) =>
  process.env.GATSBY_ENV === 'production'
    ? data.filter(({ status }) => status === 'published')
    : data;

export const publishedIssueFilter = (data) =>
  process.env.GATSBY_ENV === 'production'
    ? data.filter(
        ({ status, issue }) =>
          status === 'published' && issue.status === 'published',
      )
    : data;
