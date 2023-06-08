import React from 'react';
import Header from '../../components/common/header/Header.jsx';
import Banner from '../../components/layouts/Main/Banner.jsx';
import ProductItemList from '../../components/layouts/Main/ProductItemList.jsx';

export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <ProductItemList />
    </>
  );
}
