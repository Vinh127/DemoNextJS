import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';

import Head from 'next/head'
import Image from 'next/image'

import 'antd/dist/antd.css';

function Home() {
  useEffect(() => {
    router.push('/product');
  }, [])


  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}


export default Home;