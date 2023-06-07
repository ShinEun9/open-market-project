import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import LogoHodu from '../../assets/Logo-hodu.png';
import LoginFormBox from './LoginFormBox';

export default function LoginPage() {
  return (
    <>
      <header>
        <h1 className={styles['header']}>
          <span className="a11y-hidden">홈화면버튼</span>
          <Link to="/">
            <img src={LogoHodu} alt="" />
          </Link>
        </h1>
      </header>
      <section className={styles['login-section']}>
        <h2 className="a11y-hidden">구매회원 로그인/판매회원로그인</h2>
        <LoginFormBox />
      </section>
      <div className={styles['btns-container']}>
        <Link to="/signup">회원가입</Link>
        <span>|</span>
        <Link to="/findpw">비밀번호 찾기</Link>
      </div>
    </>
  );
}
