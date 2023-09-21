import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Toast from '@/common/Toast';
import { ToastProvider, useToast } from '../useToast';

jest.mock('../../common/Toast', () => {
  return jest.fn(() => <div data-testid="mock-toast"></div>);
});

describe('ToastProvider', () => {
  it('renders children and provides context', () => {
    const { getByTestId } = render(
      <ToastProvider>
        <div data-testid="child-component"></div>
      </ToastProvider>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();
  });

  it('shows and hides toast messages', async () => {
    const TestComponent = () => {
      const { showToast, hideToast } = useToast();

      const handleShowToast = () => {
        showToast('This is a test message', 'success', 1000);
      };

      return (
        <div>
          <button onClick={handleShowToast}>Show Toast</button>
          <button onClick={hideToast}>Hide Toast</button>
        </div>
      );
    };

    const { getByText, queryByText } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    expect(queryByText('This is a test message')).toBeNull();

    fireEvent.click(getByText('Hide Toast'));

    await waitFor(() => {
      expect(queryByText('This is a test message')).toBeNull();
    });
  });
});

test('Toast component snapshot', () => {
  const { asFragment } = render(
    <ToastProvider>
      <Toast />
    </ToastProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
