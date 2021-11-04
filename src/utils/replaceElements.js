import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { BodyImage } from '../components';

const cdnUrl = process.env.CDN_URL
  ? process.env.CDN_URL
  : 'https://cdn.lanl.gov/';
const pdfLink = (pdf) => `${cdnUrl}${pdf}.pdf`;

export const getSrcID = (src) => src.split('/').pop();

export const isAsset = (src) => src.split('/').slice(-2)[0] === 'assets';

export const useFiles = (id) => {
  const {
    system: { files },
  } = useStaticQuery(graphql`
    query {
      system {
        ...AllImageFiles
      }
    }
  `);
  return files.find((fid) => fid.id === id);
};

export const createBodyImage = (id, files = {}) => {
  const file = useFiles(id);
  if (typeof file === 'object') {
    return (
      <BodyImage
        imgSrc={file.filename_disk ?? ''}
        alt={file.title ?? ''}
        width={`${file.width}` ?? ''}
        height={`${file.height}` ?? ''}
      />
    );
  }
  return;
};

export const replaceElements = (body) =>
  parse(body, {
    replace: (domNode) => {
      if (domNode.attribs && domNode.name === 'img') {
        const srcID = getSrcID(domNode.attribs.src);
        return createBodyImage(srcID);
      }
      if (
        domNode.attribs &&
        domNode.name === 'a' &&
        isAsset(domNode.attribs.href)
      ) {
        domNode.attribs.href = pdfLink(getSrcID(domNode.attribs.href));
        return domNode;
      }
    },
  });
