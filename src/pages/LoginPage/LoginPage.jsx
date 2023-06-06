import React from 'react';
import { Link } from 'react-router-dom';
import LogoHodu from '../../assets/Logo-hodu.png';
import styles from './LoginPage.module.css';
import LoginTabs from './LoginTabs';

export default function LoginPage() {
  return (
    <div>
      <Link to="/">
        <h1 className={styles.logoBtn}>
          <img src={LogoHodu} alt="" />
        </h1>
      </Link>
      <section className={styles.loginSection}>
        <LoginTabs />
        <form className={styles.loginForm}>
          <label htmlFor="user-id">
            <input
              type="text"
              id="user-id"
              placeholder="아이디"
              className={styles.loginInput}
            />
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id="password"
              placeholder="비밀번호"
              className={styles.loginInput}
            />
          </label>
          <button type="submit" className={styles.loginBtn}>
            로그인
          </button>
        </form>
        {/* <h2 className="a11y-hidden">로그인</h2> */}
      </section>
    </div>
  );
}
