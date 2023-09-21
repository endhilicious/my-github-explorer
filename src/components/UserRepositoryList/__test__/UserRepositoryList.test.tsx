import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserRepositoryList from '../UserRepositoryList';
import { useRouter } from 'next/router';
import * as useGithubDataContext from '@/context/useGithubData';

const mockPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('../../../context/useGithubData', () => ({
  useGithubData: jest.fn(),
}));

describe('UserRepositoryList Component', () => {
  beforeEach(() => {
    jest
      .spyOn(useGithubDataContext, 'useGithubData')
      .mockReturnValue({
        state: {
          users: [
            {
              id: 1,
              login: 'user1',
              avatar_url: 'https://example.com/avatar1.png',
            },
            {
              id: 2,
              login: 'user2',
              avatar_url: 'https://example.com/avatar2.png',
            },
          ],
          selectedUser: {},
          repos: [],
        },
        dispatch: function (_: any): void {
          throw new Error('Function not implemented.');
        }
      });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('menampilkan daftar pengguna dengan benar', () => {
    const { getByTestId, getAllByTestId } = render(<UserRepositoryList />);
    const userListElement = getByTestId('user-repository-list');
    const userItems = getAllByTestId('user-item');

    expect(userListElement).toBeInTheDocument();
    expect(userItems).toHaveLength(2);

    expect(userItems[0]).toHaveTextContent('user1');
    expect(userItems[1]).toHaveTextContent('user2');
  });

  it('menavigasi ke halaman pengguna yang benar saat item diklik', () => {
    const { getAllByTestId } = render(<UserRepositoryList />);
    const userItems = getAllByTestId('user-item');

    fireEvent.click(userItems[0]);

    expect(mockPush).toHaveBeenCalled();
  });

  it('membuat snapshot komponen', () => {
    const { asFragment } = render(<UserRepositoryList />);

    expect(asFragment()).toMatchSnapshot();
  });
});
