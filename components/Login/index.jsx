import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/Login.module.scss';


function LoginPage() {
    const router = useRouter();

    return (
        <div className={styles.login}>
            <div className={styles.login__left}>
                <div className={styles.login__logo}>
                    <img
                        src="https://diprella.com/assets/img/diprella_logo.svg"
                        onClick={() => router.push('/product')}
                        alt="Logo" />
                </div>

                <div className={styles.login__form}>
                    <h3 className={styles.login__title}>
                        Sign in with Diprella
                    </h3>

                    <div className={styles.login__field}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Fill your email" />
                    </div>

                    <div className={styles.login__field}>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Fill your password" />
                    </div>

                    <div className={styles.login__under}>
                        <div className={styles.login__checkbox}>
                            <label htmlFor="">Keep me sign in</label>
                            <input type="checkbox" />
                        </div>

                        {/* gia tri as có thể dùng để cấu hình url */}

                        <Link href="/register">
                            <p>No Account ?</p>
                        </Link>
                    </div>

                    <div className={styles.login__button}>
                        <button>Đăng Nhập</button>
                    </div>


                </div>
            </div>


            <div className={styles.login__right}>

            </div>
        </div>

       

    );

}
export default LoginPage;