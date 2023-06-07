import React from 'react';
import Header from '../../components/common/header/Header.jsx';
import Banner from './Banner.jsx';
import ProductItemList from './ProductItemList.jsx';

export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <ProductItemList />
    </>
  );
}
