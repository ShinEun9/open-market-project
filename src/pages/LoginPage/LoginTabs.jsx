import React, { useCallback } from 'react';
import styles from './LoginTabs.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); //eslint-disable-line no-unused-vars

export default function LoginTabs({ tabIndex, setTabIndex }) {
  const handleClickTab = useCallback((e) => {
    const index = parseInt(e.currentTarget.value);
    setTabIndex(index);
  }, []);

  return (
    <ul className={styles.loginTabs}>
      <li
        className={tabIndex === 0 ? cx('loginTab', 'active') : styles.loginTab}
      >
        <button value={0} type="button" onClick={handleClickTab}>
          구매회원 로그인
        </button>
      </li>
      <li
        className={tabIndex === 1 ? cx('loginTab', 'active') : styles.loginTab}
      >
        <button value={1} type="button" onClick={handleClickTab}>
          판매회원 로그인
        </button>
      </li>
    </ul>
  );
}
