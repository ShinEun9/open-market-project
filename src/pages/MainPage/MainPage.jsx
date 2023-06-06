import React from 'react';
import Header from '../../components/Header.jsx';
import ImageSwiper from './ImageSwiper.jsx';
import ProductItemList from './ProductItemList.jsx';

export default function MainPage() {
  return (
    <div>
      <Header />
      <ImageSwiper />
      <ProductItemList />
    </div>
  );
}
