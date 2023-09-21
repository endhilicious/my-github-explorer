import React from 'react';
import { render, act } from '@testing-library/react';
import { GithubDataProvider, useGithubData } from '../useGithubData';

const MockConsumer = () => {
  const { state, dispatch } = useGithubData();

  return (
    <div>
      <span data-testid="users-count">{state.users.length}</span>
      <button
        data-testid="add-user-button"
        onClick={() =>
          dispatch({
            type: 'ADD_USERS',
            payload: [{ id: 1, login: 'user1' }],
          })
        }
      >
        Add User
      </button>
    </div>
  );
};

describe('GithubDataProvider', () => {
  it('renders children and provides context', () => {
    const { getByTestId } = render(
      <GithubDataProvider>
        <MockConsumer />
      </GithubDataProvider>
    );

    expect(getByTestId('users-count')).toHaveTextContent('0');

    act(() => {
      getByTestId('add-user-button').click();
    });

    expect(getByTestId('users-count')).toHaveTextContent('1');
  });
});
