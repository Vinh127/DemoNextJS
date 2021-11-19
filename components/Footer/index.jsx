import React, { useState } from 'react';

import styles from '../../styles/Footer.module.scss';

function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__logo}>
                    <img
                        src="https://diprella.com/assets/img/diprella_footer_logo.svg"
                        onClick={() => router.push('/home')}
                        alt="Logo" />
                </div>

                <ul className={styles.footer__list}>
                    <h4>Diprella</h4>
                    <li>Các khóa học</li>
                    <li>Giá cả</li>
                    <li>Đối tác</li>
                </ul>

                <ul className={styles.footer__list}>
                    <h4>Diprella</h4>
                    <li>Các khóa học</li>
                    <li>Giá cả</li>
                    <li>Đối tác</li>
                </ul>

                <ul className={styles.footer__list}>
                    <h4>Diprella</h4>
                    <li>Các khóa học</li>
                    <li>Giá cả</li>
                    <li>Đối tác</li>
                </ul>
            </div>


        </div>
    )

}

export default Footer;