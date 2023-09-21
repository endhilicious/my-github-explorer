import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('Header displays the correct text', () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId('header-text');

  expect(headerElement.textContent).toBe('Github Repositories Explorer');
});

test('Header has a consistent appearance with the snapshot', () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});
