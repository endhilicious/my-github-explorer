import UserProfileView from '@/views/UserProfileView'
import Head from 'next/head'
import React from 'react'

const UserProfile: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <UserProfileView />
    </>
  )
}

export default UserProfile