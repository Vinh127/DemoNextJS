import React, { useState } from 'react';
import Head from 'next/head'

import Header from '../Header';
import Footer from '../Footer';

function RegularLayout({ children, title }) {
    return (
        <>
            {/* <Head>
                <title>{title}</title>
            </Head> */}
            <Header />
            {children}
            <Footer />
        </>
    )


}
export default RegularLayout;
