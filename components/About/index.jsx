import React from 'react';

import RegularLayout from '../RegularLayout';

import styles from '../../styles/About.module.scss';

function AboutPage() {
    return (
        <>
            <RegularLayout>
                <div className={styles.about}>
                    <div className={styles.about__banner}>
                        <div className={styles.about__banner_background1}>

                        </div>

                        <div className={styles.about__banner_background2}>
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro tenetur ipsam facere accusamus ab delectus iste, laudantium hic beatae consequatur molestiae nisi deserunt nesciunt, quod neque soluta fugit unde quibusdam.</p>
                        </div>

                        <div className={styles.about__banner_background3}>

                        </div>
                    </div>

                    <div className={styles.about__list}>
                        <div className={styles.about__list_item}>
                            <div className={styles.about__list_item_box}>
                                <div className={styles.about__list_item_box_logo}>
                                    <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/66/431/thumb/idG484PO" alt="" />
                                </div>

                                <div className={styles.about__list_item_box_content}>
                                    <h3 className={styles.about__list_item_box_content_title}>
                                        Development, Personal Development
                                    </h3>

                                    <h2>Basics of software testing</h2>

                                    <p>18 Nov 2021</p>
                                </div>

                            </div>

                            <div className={styles.about__list_item_company}>
                                <div className={styles.about__list_item_company_logo}>
                                    <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/e3/34/REwzYUiW" alt="" />
                                </div>

                                <div className={styles.about__list_item_company_content}>
                                    <h3 className={styles.about__list_item_company_content_title}>
                                        Lviv RUG Pivorak
                                    </h3>

                                    <h2>Germany</h2>
                                </div>


                            </div>

                            <div className={styles.about__list_item_course}>
                                <h4>Free</h4>
                            </div>

                        </div>

                        <div className={styles.about__list_item}>
                            <div className={styles.about__list_item_box}>
                                <div className={styles.about__list_item_box_logo}>
                                    <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/8c/263/thumb/SgqQUc6K" alt="" />
                                </div>

                                <div className={styles.about__list_item_box_content}>
                                    <h3 className={styles.about__list_item_box_content_title}>
                                        Personal Development
                                    </h3>

                                    <h2>#pivorak Ruby Summer Course</h2>

                                    <p>18 Nov 2021</p>
                                </div>

                            </div>

                            <div className={styles.about__list_item_company}>
                                <div className={styles.about__list_item_company_logo}>
                                    <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/8c/263/tJGwBaSD" alt="" />
                                </div>

                                <div className={styles.about__list_item_company_content}>
                                    <h3 className={styles.about__list_item_company_content_title}>
                                        Andriy Fedynyshyn
                                    </h3>

                                    <h2>Germany</h2>
                                </div>


                            </div>

                            <div className={styles.about__list_item_course}>
                                <h4>Free</h4>
                            </div>
                        </div>

                        <div className={styles.about__list_item}>
                            <div className={styles.about__list_item_box}>
                                <div className={styles.about__list_item_box_logo}>
                                    <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/68/336/thumb/0gBCHnIg" alt="" />
                                </div>

                                <div className={styles.about__list_item_box_content}>
                                    <h3 className={styles.about__list_item_box_content_title}>
                                        Personal Development, Lifestyle, Language
                                    </h3>

                                    <h2>Hate speech: from word to deed</h2>

                                    <p>18 Nov 2021</p>
                                </div>

                            </div>

                            <div className={styles.about__list_item_company}>
                                <div className={styles.about__list_item_company_logo}>
                                    <img src="https://diprella.s3.us-west-2.amazonaws.com/docs/68/336/3kGF1kgs" alt="" />
                                </div>

                                <div className={styles.about__list_item_company_content}>
                                    <h3 className={styles.about__list_item_company_content_title}>
                                        Volodymyr Beglov
                                    </h3>

                                    <h2>Germany</h2>
                                </div>


                            </div>

                            <div className={styles.about__list_item_course}>
                                <h4>Free</h4>
                            </div>
                        </div>

                    </div>
                </div>


            </RegularLayout>

        </>
    )
}
export default AboutPage;