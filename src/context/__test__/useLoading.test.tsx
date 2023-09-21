import React from 'react';
import { render, act } from '@testing-library/react';
import { LoadingProvider, useLoading } from '../useLoading';

const MockConsumer = () => {
  const { isLoading, setLoading } = useLoading();

  return (
    <div>
      <span data-testid="isLoading">{isLoading.toString()}</span>
      <button
        data-testid="setLoadingButton"
        onClick={() => setLoading(!isLoading)}
      >
        Toggle Loading
      </button>
    </div>
  );
};

describe('LoadingProvider', () => {
  it('renders children and provides context', () => {
    const { getByTestId } = render(
      <LoadingProvider>
        <MockConsumer />
      </LoadingProvider>
    );

    expect(getByTestId('isLoading')).toHaveTextContent('false');

    act(() => {
      getByTestId('setLoadingButton').click();
    });

    expect(getByTestId('isLoading')).toHaveTextContent('true');
  });
});
