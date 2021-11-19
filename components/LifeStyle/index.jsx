import React, { useState } from 'react';
import styles from '../../styles/Lifestyle.module.scss';

import RegularLayout from '../RegularLayout';

function LifeStylePage() {

    return (
        <RegularLayout>
            <div className={styles.lifestyles__list}>
                <div className={styles.lifestyle__item_one}></div>
                <div className={styles.lifestyle__item_two}></div>
                <div className={styles.lifestyle__item_three}></div>
                <div className={styles.lifestyle__item_four}></div>
                <div className={styles.lifestyle__item_five}></div>
                <div className={styles.lifestyle__background_item1}></div>
                <div className={styles.lifestyle__background_item2}>
                    <h2>Lifestyle</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro tenetur ipsam facere accusamus ab delectus iste, laudantium hic beatae consequatur molestiae nisi deserunt nesciunt, quod neque soluta fugit unde quibusdam.</p>
                </div>
                <div className={styles.lifestyle__background_item3}></div>
            </div>

            <div className={styles.lifestyle__content}>

                <div className={styles.lifestyle__result_list}>
                <h3 className={styles.lifestyle__content_title}>
                    Let's get it
                </h3>
                    <div className={styles.lifestyle__result_box}>
                        <div className={styles.lifestyle__result_box_logo}>
                            <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/68/336/thumb/0gBCHnIg" alt="" />
                        </div>

                        <div className={styles.lifestyle__result_box_name}>
                            <h4>La Sinatra Modokva Havana Lorem Lorem</h4>
                            <p>18 Nov 2021</p>
                        </div>
                    </div>

                    <div className={styles.lifestyle__result_company}>
                        <div className={styles.lifestyle__result_company_logo}>
                            <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/68/336/3kGF1kgs" alt="" />
                        </div>

                        <div className={styles.lifestyle__result_company_name}>
                            <h4>Floy May</h4>
                            <p>Begalov</p>
                        </div>
                    </div>
                </div>
            </div>

        </RegularLayout >
    )

}
export default LifeStylePage;