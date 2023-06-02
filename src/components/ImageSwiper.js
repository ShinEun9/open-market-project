import React, { useState, useRef, useEffect } from "react";
import styles from "./ImageSwiper.module.css";
import Prev from "../assets/icon-swiper-1.svg";
import Next from "../assets/icon-swiper-2.svg";

export default function ImageSwiper() {
  const [imgList, setImgList] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const getImage = async () => {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
      const data = await res.json();
      setImgList(data);
    };
    getImage();
  }, []);

  const handleBtnClick = (e) => {
    const value = e.currentTarget.firstChild.textContent;
    if (value === "이전 이미지 보기 버튼") {
      setIndex((index) => {
        if (index === 0) {
          return 4;
        } else {
          return index - 1;
        }
      });
    } else {
      setIndex((index) => {
        if (index === 4) {
          return 0;
        } else {
          return index + 1;
        }
      });
    }
  };

  return (
    <section className={styles.imgSwiper}>
      <button className={styles.swipeBtn} onClick={handleBtnClick}>
        <span className={"a11y-hidden"}>이전 이미지 보기 버튼</span>
        <img src={Prev} alt="" />
      </button>
      {!!imgList.length && <img src={imgList[index].download_url} />}
      <button className={styles.swipeBtn} onClick={handleBtnClick}>
        <span className={"a11y-hidden"}>다음 이미지 보기 버튼</span>
        <img src={Next} alt="" />
      </button>
    </section>
  );
}
