import React from "react";
import styles from "./Header.module.css";
import LogoHodu from "../assets/Logo-hodu.png";
import Search from "../assets/icon-search.svg";
import ShoppingCart from "../assets/icon-shopping-cart.svg";
import Login from "../assets/icon-user.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="#" className={styles.logoBtn}>
          <h1>
            <img src={LogoHodu} alt="" />
          </h1>
        </a>
        <form className={styles.searchForm}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button>
            <img src={Search} alt="검색버튼" />
          </button>
        </form>
        <div className={styles.headerIconBtns}>
          <a href="#" className={styles.headerIconBtn}>
            <img src={ShoppingCart} alt="장바구니버튼" />
            <p>장바구니</p>
          </a>
          <a href="#" className={styles.headerIconBtn}>
            <img src={Login} alt="로그인 버튼" />
            <p>로그인</p>
          </a>
        </div>
      </div>
    </header>
  );
}
