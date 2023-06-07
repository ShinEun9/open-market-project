import React, { useState } from 'react';
import styles from './LoginFormBox.module.css';
import LoginTabs from './LoginTabs';
import TextInputBox from '../../components/common/text-input-box/TestInputBox';
import Button from '../../components/common/button/Button';
import { useInputs } from '../../hooks/useInputs';

export default function LoginFormBox() {
  const [value, onChange] = useInputs({ username: '', password: '' });
  const [tabIndex, setTabIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://openmarket.weniv.co.kr/accounts/login', {
        method: 'POST',
        body: JSON.stringify({
          ...value,
          login_type: tabIndex === 0 ? 'BUYER' : 'SELLER',
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className={styles['login-form-box']}>
      <LoginTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <form className={styles['login-form']} onSubmit={handleSubmit}>
        <TextInputBox
          type="text"
          id="user-id"
          name="username"
          placeholder="아이디"
          value={value.username}
          onChange={onChange}
        />
        <TextInputBox
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={value.password}
          onChange={onChange}
        />
        {/* <strong className={styles['error-message']}>
          아이디 또는 비밀번호가 일치하지 않습니다.
        </strong> */}
        <Button>로그인</Button>
      </form>
    </div>
  );
}
