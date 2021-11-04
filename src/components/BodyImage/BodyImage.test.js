import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { BodyImage } from './BodyImage';

const testItem = <BodyImage imgSrc='' alt='Test Image' />;

test('renders', () => {
  const { getByAltText, getByTestId } = render(testItem);

  expect(getByTestId('lanl-article-body-img')).toBeInTheDocument();
  expect(getByAltText('Test Image')).toBeInTheDocument();
});

test('no basic a11ly issues', async () => {
  const { container } = render(testItem);
  expect(await axe(container)).toHaveNoViolations();
});
