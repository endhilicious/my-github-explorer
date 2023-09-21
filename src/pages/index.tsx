import React from 'react'

import Homepage from '@/views/HomepageView/HomepageView'
import Head from 'next/head';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Homepage />
    </>
  )
}

export default Index;
