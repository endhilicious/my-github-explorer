import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('Header menampilkan teks yang benar', () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId('header-text');

  expect(headerElement.textContent).toBe('Github Repositories Explorer');
});

test('Header memiliki tampilan yang konsisten dengan snapshot', () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});
