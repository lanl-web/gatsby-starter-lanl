const imgHost = process.env.IMG_URL ?? '/static';

export const createDownloadLink = (imageId) => {
  return `${process.env.CMS_URL}/assets/${imageId}?download`;
};

export const getImageUrl = (imgSrc) => `${imgHost}/${imgSrc}`;
