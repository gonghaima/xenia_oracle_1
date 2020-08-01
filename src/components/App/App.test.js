/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/The Benefits of Xenia Suite/i);
  expect(linkElement).toBeInTheDocument();
});
