import React from 'react';
import Header from '../../components/common/header/Header.jsx';
import ImageSwiper from './ImageSwiper.jsx';
import ProductItemList from './ProductItemList.jsx';

export default function MainPage() {
  return (
    <>
      <Header />
      <ImageSwiper />
      <ProductItemList />
    </>
  );
}
