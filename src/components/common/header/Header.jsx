import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useUserContext } from '../../../hooks/useUserContext';
import LogoHodu from '../../../assets/Logo-hodu.png';
import Search from '../../../assets/icon-search.svg';
import ShoppingCart from '../../../assets/icon-shopping-cart.svg';
import Login from '../../../assets/icon-user.svg';
import MyPage from '../../../assets/icon-user.svg';

export default function Header() {
  const { user } = useUserContext();

  return (
    <header className={styles['header']}>
      <div>
        <Link to="/" className={styles['logo-btn']}>
          <h1>
            <img src={LogoHodu} alt="로고사진" />
          </h1>
        </Link>
        <form className={styles['search-form']}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button>
            <img src={Search} alt="검색버튼" />
          </button>
        </form>

        <div className={styles['header-icon-btns']}>
          {/* 비회원일 때는 클릭 시 로그인 하라고 모달창 떠야함 */}
          <Link to="/cart" className={styles['header-icon-btn']}>
            <img src={ShoppingCart} alt="장바구니버튼" />
            <p>장바구니</p>
          </Link>

          {!user ? (
            <Link to={'/login'} className={styles['header-icon-btn']}>
              <img src={Login} alt="로그인 버튼" />
              <p>로그인</p>
            </Link>
          ) : (
            <button type="button" className={styles['header-icon-btn']}>
              <img src={MyPage} alt="마이페이지 버튼" />
              <p>마이페이지</p>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
