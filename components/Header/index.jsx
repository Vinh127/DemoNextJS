import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Drawer } from 'antd';

import styles from '../../styles/Header.module.scss';

function Header() {
    const router = useRouter();

    const [isShowDrawer, setIsShowDrawer] = useState(false);

    function renderShowMenu() {
        return (
            <div className={styles.res__menu}>
                <div className={styles.res__menu_logo}>
                    <img
                        src="https://diprella.com/assets/img/diprella_logo.svg"
                        onClick={() => router.push('/product')}
                        alt="Logo" />
                </div>
                <ul className={styles.res__list}>
                    <li onClick={() => router.push('/product')}>Product</li>
                    <li onClick={() => router.push('/about')}>About</li>
                    <li onClick={() => router.push('/lifestyle')}>LifeStyle</li>
                    <li onClick={() => router.push('/login')}>Login</li>
                </ul>
            </div>
        )
    }

    return (
        <>
            {isShowDrawer
                ? (
                    <div>
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={() => setIsShowDrawer(false)}
                            visible={isShowDrawer}
                        >
                            {renderShowMenu()}
                        </Drawer>
                    </div>
                )
                : ""
            }

            <div className={styles.header}>
                <div className={styles.header__content}>
                    <div className={styles.header__logo}>
                        <img
                            src="https://diprella.com/assets/img/diprella_logo.svg"
                            onClick={() => router.push('/product')}
                            alt="Logo" />
                    </div>

                    <div
                        onClick={() => setIsShowDrawer(!isShowDrawer)}
                        className={styles.header__hambuger_icon}
                    >
                        <svg viewBox="0 0 100 80">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>


                    <ul className={styles.header__nav}>
                        <li onClick={() => router.push('/product')}>Product</li>
                        <li onClick={() => router.push('/about')}>About</li>
                        <li onClick={() => router.push('/lifestyle')}>Lifestyle</li>
                    </ul>
                </div>

                <div className={styles.header__login}>
                    <Link href="/login">
                        <Button>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;
