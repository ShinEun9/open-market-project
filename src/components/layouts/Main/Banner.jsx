import React, { useState, useMemo, useRef } from 'react';
import styles from './Banner.module.css';
import Prev from '../../../assets/icon-swiper-1.svg';
import Next from '../../../assets/icon-swiper-2.svg';

const getImgSrc = () => {
  console.log('getImgSrc');
  const list = [];
  for (let i = 0; i < 5; i++) {
    list.push(`./assets/img_${i + 1}.jpg`);
  }
  return list;
};

export default function Banner() {
  const imgList = useMemo(() => {
    return getImgSrc();
  }, []);

  const imgLength = useRef(5);
  const [index, setIndex] = useState(0);

  const handleBtnClick = (e) => {
    const value = e.currentTarget.firstChild.textContent;
    if (value === '이전 이미지 보기 버튼') {
      setIndex((index) => {
        if (index === 0) {
          return imgLength.current - 1;
        } else {
          return index - 1;
        }
      });
    } else {
      setIndex((index) => {
        console.log(index, imgLength.current - 1);
        if (index === imgLength.current - 1) {
          return 0;
        } else {
          console.log(index + 1);
          return index + 1;
        }
      });
    }
  };

  return (
    <section className={styles.imgSwiper}>
      <h2 className="a11y-hidden">쇼핑몰 배너</h2>
      <button className={styles.swipeBtn} onClick={handleBtnClick}>
        <span className={'a11y-hidden'}>이전 이미지 보기 버튼</span>
        <img src={Prev} alt="왼쪽 화살표" />
      </button>
      <img src={imgList[index]} alt={`배너${index + 1}`} />
      <button className={styles.swipeBtn} onClick={handleBtnClick}>
        <span className={'a11y-hidden'}>다음 이미지 보기 버튼</span>
        <img src={Next} alt="오른쪽 화살표" />
      </button>
    </section>
  );
}
