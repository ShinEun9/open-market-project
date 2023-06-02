import React from "react";
import styles from "./ProductItem.module.css";

export default function ProductItem({ item }) {
  return (
    <article>
      <img className={styles.productImage} src={item.image} alt="" />
      <p className={styles.seller}>{item.seller_store}</p>
      <h3 className={styles.name}>{item.product_name}</h3>
      <span className={styles.price}>
        <strong>{new Intl.NumberFormat().format(item.price)}</strong>원
      </span>
    </article>
  );
}
