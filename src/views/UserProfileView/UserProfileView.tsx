import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import Header from '@/components/Header';
import CloseIcon from '@/common/Icons/CloseIcon';
import StarIcon from '@/common/Icons/StarIcon';

import { useLoading } from '@/context/useLoading';
import { useToast } from '@/context/useToast';
import { useGithubData } from '@/context/useGithubData';
import { getUserDetail, getUserRepositories } from '@/utils/api';

import styles from './UserProfileView.module.scss';

const UserProfileView: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  const { setLoading } = useLoading();
  const { showToast } = useToast();

  const { state: { selectedUser, repos }, dispatch } = useGithubData();

  const fetchUserData = async () => {
    try {
      setLoading(true)

      const userDetail = await getUserDetail(username as string);
      const userRepo = await getUserRepositories(username as string);

      dispatch({ type: 'SELECTED_USER', payload: userDetail });
      dispatch({ type: 'ADD_REPOS', payload: userRepo });

      showToast('Success fetching user repositories', 'success');
    } catch (error) {
      showToast('Error fetching user repositories', 'danger');

      console.error('Error fetching user repositories:', error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (username) fetchUserData();
  }, [username]);

  const handleCloseSelectedItem = () => {
    router.back();
  }

  return (
    <div className={styles.userProfile}>
      <Header />
      <main>
        <h1>{username}'s Repositories</h1>
        <div>
          {selectedUser && (
            <div className={styles.cardHeaderSelected}>
                <div>
                  <img className={styles.selectedImage} src={selectedUser?.avatar_url} alt={`${selectedUser?.login}'s avatar`} />
                </div>
                <div>
                  <h3>
                    {selectedUser?.login}
                  </h3>
                  <div onClick={handleCloseSelectedItem}>
                    <CloseIcon />
                  </div>
                </div>
            </div>
          )}
          {repos.map((newValue: any) => {
            return (
              <div className={cx(styles.cardHeaderSelected, styles.cardHeaderSelectedRepo)} style={{ margin: '10px 0'}}>
                <div>
                  <div>
                    <b>{newValue.name}</b>
                  </div>
                  <div>
                    <small>{newValue.description}</small>
                  </div>
                </div>
                <div>
                  <span>{newValue.stargazers_count}</span>
                  <span><StarIcon /></span>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
};

export default UserProfileView;
