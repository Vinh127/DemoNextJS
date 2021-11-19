import React, { useState } from 'react';
import NextLink from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';


import RegularLayout from '../RegularLayout';

import styles from '../../styles/Home.module.scss';

function ProductPage({ product, error }) {
    const router = useRouter();
    // const rootClass = `home`
    console.log("product: ", product);


    function renderProduct() {
        return product.map((productItem, productIndex) => {
            return (

                <div className={styles.home__item}>
                    <div className={styles.home__logo}>
                        <img
                            onClick={() => router.push(`/product/${productItem.id}`)}
                            src={productItem.image} alt=""
                        />
                    </div>

                    <div className={styles.home__content}>
                        <h3 className={styles.home__name}>
                            {productItem.name}
                        </h3>

                        <p className={styles.home__price}>
                            {(productItem.price.toLocaleString())}
                        </p>

                    </div>
                </div>

            );
        })
    }

    function handleBackToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return (
        <>
            <RegularLayout>
                <div className={styles.home}>
                    <button
                        className={styles.home__button}
                        onClick={handleBackToTop}
                    >
                        Top
                    </button>

                    <div className={styles.home__list}>
                        {renderProduct()}
                    </div>
                </div>

            </RegularLayout>

        </>
    )
}





export default ProductPage;