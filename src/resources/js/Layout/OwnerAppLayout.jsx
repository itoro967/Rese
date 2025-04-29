import React from 'react';
import Header from '@/common/header';

export default function OwnerAppLayout({children}) {
      const items = [
          ['logout',route('owner.logout'),'get'],
          ['addRestaurant',route('restaurant.create'),'get'],
      ];
  return (
    <>
      <Header menuItems={items}/>
      <main className="m-3 pt-10 flex justify-center">{children}</main>
    </>
  );
}