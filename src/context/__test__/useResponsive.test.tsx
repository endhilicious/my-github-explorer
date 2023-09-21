import React from 'react';
import { render, act } from '@testing-library/react';
import { ResponsiveProvider, useResponsive } from '../useResponsive';

const MockConsumer = () => {
  const { isDesktopView } = useResponsive();

  return (
    <div>
      <span data-testid="isDesktopView">{isDesktopView.toString()}</span>
    </div>
  );
};

describe('ResponsiveProvider', () => {
  it('renders children and provides context', () => {
    const { getByTestId } = render(
      <ResponsiveProvider>
        <MockConsumer />
      </ResponsiveProvider>
    );

    expect(getByTestId('isDesktopView')).toHaveTextContent('true');

    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });

    expect(getByTestId('isDesktopView')).toHaveTextContent('false');
  });
});
