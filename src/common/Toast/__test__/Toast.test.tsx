import React from 'react';
import { render, screen } from '@testing-library/react';
import Toast from '../Toast';

const mockUseToast = {
  toastData: {
    message: 'Test message',
    visible: true,
    type: 'success',
  },
  hideToast: jest.fn(),
};

jest.mock('../../../context/useToast', () => ({
  useToast: () => mockUseToast,
}));

test('renders toast with correct styles based on type', () => {
  render(<Toast />);
  
  const toastElement = screen.getByText('Test message');
  const closeButton = screen.getByText('X');
  
  expect(toastElement).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
});

test('calls hideToast when close button is clicked', () => {
  render(<Toast />);
  
  const closeButton = screen.getByText('X');
  closeButton.click();
  
  expect(mockUseToast.hideToast).toHaveBeenCalledTimes(1);
});
