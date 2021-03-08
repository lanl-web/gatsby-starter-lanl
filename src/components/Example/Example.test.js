import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Example } from './Example';

test('renders', () => {
  const { getByTestId } = render(<Example />);
  expect(getByTestId('lanl-example')).toBeInTheDocument();
});

test('no basic a11ly issues', async () => {
  const { container } = render(<Example />);
  expect(await axe(container)).toHaveNoViolations();
});
