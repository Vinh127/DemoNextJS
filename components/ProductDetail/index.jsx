import React, { useState } from 'react';
import { useRouter } from 'next/router';

import RegularLayout from '../RegularLayout';

import styles from '../../styles/HomeDetail.module.scss';

function ProductDetailPage({ productDetail }) {
    console.log("productDetail: ", productDetail);

    return (
        <RegularLayout>
            <div className={styles.home__detail}>
                <div className={styles.home__detail_item}>
                    <div className={styles.home__detail_item_logo}>
                        <img
                            src={productDetail.image}
                            alt="" />
                    </div>

                    <div className={styles.home__detail_item_content}>
                        <h3 className={styles.home__detail_item_content_name}>
                            {productDetail.name}
                        </h3>

                        <p className={styles.home__detail_item_content_price}>
                            {(productDetail.price.toLocaleString())}
                        </p>
                    </div>
                </div>
            </div>
        </RegularLayout>

    )
}



export default ProductDetailPage;