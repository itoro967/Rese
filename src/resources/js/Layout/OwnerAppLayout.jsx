import React from 'react';
import Header from '@/common/header';

export default function OwnerAppLayout({children}) {
      const items = [
          ['home',route('owner.index'),'get'],
          ['addRestaurant',route('restaurant.create'),'get'],
          ['logout',route('owner.logout'),'get'],
      ];
  return (
    <>
      <Header menuItems={items}/>
      <main className="m-3 pt-10 flex justify-center">{children}</main>
    </>
  );
}