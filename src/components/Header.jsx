import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LogoHodu from '../assets/Logo-hodu.png';
import Search from '../assets/icon-search.svg';
import ShoppingCart from '../assets/icon-shopping-cart.svg';
import Login from '../assets/icon-user.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="#" className={styles.logoBtn}>
          <h1>
            <img src={LogoHodu} alt="로고사진" />
          </h1>
        </a>
        <form className={styles.searchForm}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button>
            <img src={Search} alt="검색버튼" />
          </button>
        </form>
        <div className={styles.headerIconBtns}>
          <Link className={styles.headerIconBtn}>
            <img src={ShoppingCart} alt="장바구니버튼" />
            <p>장바구니</p>
          </Link>
          <Link to={'/login'} className={styles.headerIconBtn}>
            <img src={Login} alt="로그인 버튼" />
            <p>로그인</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
