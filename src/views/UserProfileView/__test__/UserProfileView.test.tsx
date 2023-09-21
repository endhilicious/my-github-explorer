import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import UserProfileView from '../UserProfileView';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../../context/useLoading', () => ({
  useLoading: jest.fn(() => ({ setLoading: jest.fn() })),
}));

jest.mock('../../../context/useToast', () => ({
  useToast: jest.fn(() => ({ showToast: jest.fn() })),
}));

jest.mock('../../../context/useGithubData', () => ({
  useGithubData: jest.fn(() => ({
    state: {
      selectedUser: {
        login: 'testuser',
        avatar_url: 'https://example.com/avatar.png',
      },
      repos: [
        {
          name: 'repo1',
          description: 'Description 1',
          stargazers_count: 10,
        },
        {
          name: 'repo2',
          description: 'Description 2',
          stargazers_count: 20,
        },
      ],
    },
    dispatch: jest.fn(),
  })),
}));

jest.mock('../../../utils/api', () => ({
  getUserDetail: jest.fn(() => Promise.resolve({})),
  getUserRepositories: jest.fn(() => Promise.resolve([])),
}));

describe('UserProfileView Component', () => {
  it('renders UserProfileView component correctly', () => {
    (useRouter as any).mockReturnValue({ query: { username: 'testuser' } });

    const { asFragment } = render(<UserProfileView />);
    expect(asFragment()).toMatchSnapshot();
  });
});
