import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import styles from './ProductItemList.module.css';

export default function ProductItemList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      try {
        const res = await fetch('https://openmarket.weniv.co.kr/products');
        const data = await res.json();
        setProductList(data.results);
      } catch (err) {
        throw new Error('네트워크 에러입니다');
      }
    };
    getProductList();
  }, []);

  return (
    <section className={styles.listSection}>
      <h2 className={'a11y-hidden'}>판매 상품 목록</h2>
      <ul className={styles.list}>
        {productList.map((item) => (
          <li key={item.product_id}>
            <ProductItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
