const defaultOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};
export const formatDate = (date, options = defaultOptions) =>
  new Date(date).toLocaleDateString('en-US', options);
