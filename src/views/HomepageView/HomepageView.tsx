import React from 'react';

import Header from '@/components/Header';
import UserSearch from '@/components/UserSearch';
import UserRepositoryList from '@/components/UserRepositoryList';

import { useLoading } from '@/context/useLoading';
import { useGithubData } from '@/context/useGithubData';
import { useToast } from '@/context/useToast';
import { searchUsers } from '@/utils/api';

import styles from './HomepageView.module.scss';

const Homepage: React.FC = () => {
  const { setLoading } = useLoading();
  const { dispatch } = useGithubData();
  const { showToast } = useToast();

  const handleSearch = async (query: string) => {
    try {
      setLoading(true)
      const newUser = await searchUsers(query);

      dispatch({ type: 'ADD_USERS', payload: newUser });
    } catch (error) {
      console.error('error', error);
      showToast('Error fetching user repositories', 'danger');
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className={styles.home__wrapper}>
      <Header />
      <main>
        <UserSearch onSearch={handleSearch} />
        <UserRepositoryList />
      </main>
    </div>
  );
};

export default Homepage;
