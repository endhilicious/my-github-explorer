import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import HomepageView from '../HomepageView';
import { useGithubData } from '@/context/useGithubData';
import * as apiUtils from '@/utils/api';

jest.mock('../../../context/useLoading', () => ({
  useLoading: jest.fn(() => ({ setLoading: jest.fn() })),
}));

jest.mock('../../../context/useGithubData', () => ({
  useGithubData: jest.fn(() => ({
    state: {
      users: [],
    },
    dispatch: jest.fn()
  })),
}));

jest.mock('../../../context/useToast', () => ({
  useToast: jest.fn(() => ({ showToast: jest.fn() })),
}));

jest.mock('../../../context/useResponsive', () => ({
  useResponsive: jest.fn(() => ({ isDesktopView: true })),
}));

jest.mock('../../../utils/api', () => ({
  searchUsers: jest.fn(),
}));

describe('HomepageView Component', () => {
  it('renders HomepageView component correctly', () => {
    const { container } = render(<HomepageView />);
    expect(container).toMatchSnapshot();
  });

  it('handles search correctly', async () => {
    (useGithubData as any).mockReturnValue({
      state: {
        users: [],
      },
      dispatch: jest.fn(),
    });

    const newUser = {
      id: 1,
      login: 'user123',
      avatar_url: 'https://example.com/avatar.png',
    };
    (apiUtils.searchUsers as any).mockResolvedValue(newUser);

    const { getByTestId } = render(<HomepageView />);
    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'user123' } });

    fireEvent.click(getByTestId('search-button'));

    await waitFor(() => {
      expect(apiUtils.searchUsers).toHaveBeenCalledWith('user123');
      expect(useGithubData().dispatch).toHaveBeenCalledWith({
        type: 'ADD_USERS',
        payload: newUser,
      });
    });
  });
});
