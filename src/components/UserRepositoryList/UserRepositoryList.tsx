import React from 'react';

import { useRouter } from 'next/router';
import { useGithubData } from '@/context/useGithubData';

import styles from './UserRepositoryList.module.scss';

const UserRepositoryList: React.FC = () => {
  const router = useRouter();

  const { state: { users } } = useGithubData();

  const handleOpenRepo = (login: string) => {
    router.push(`/users/${login}`)
  }

  return (
    <div className={styles.userRepositoryList} data-testid="user-repository-list">
      <h2>User Repositories</h2>
      <ul>
        {users.map((repo) => (
          <li key={repo?.id}>
            <div data-testid="user-item" className={styles.cardHeader} onClick={() => repo.login && handleOpenRepo(repo.login)}>
              <img src={repo?.avatar_url} alt={`${repo?.login}'s avatar`} />
              <div>
                <h3>{repo?.login}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositoryList;
