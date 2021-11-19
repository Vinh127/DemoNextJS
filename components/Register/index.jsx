import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/Register.module.scss';

function RegisterPage() {
    const router = useRouter();

    return (
        <>
            <div className={styles.register}>
                <div className={styles.register__left}>
                    <div className={styles.register__logo}>
                        <img
                            src="https://diprella.com/assets/img/diprella_logo.svg"
                            onClick={() => router.push('/product')}
                            alt="Logo" />
                    </div>

                    <div className={styles.register__form}>
                        <h3 className={styles.register__title}>
                            Sign up with Diprella
                        </h3>

                        <div className={styles.register__field}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="Fill your email" />
                        </div>

                        <div className={styles.register__field}>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="Fill your password" />
                        </div>

                        <div className={styles.register__field}>
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" placeholder="Confirm your password" />
                        </div>

                        <div className={styles.register__under}>

                            {/* gia tri as có thể dùng để cấu hình url */}

                            <Link href="/login">
                                <p>Already have an account ?</p>
                            </Link>
                        </div>

                        <div className={styles.register__button}>
                            <button>Đăng Ký</button>
                        </div>

                    </div>

                </div>

                <div className={styles.register__right}>

                </div>
            </div>




        </>
    )

}
export default RegisterPage;