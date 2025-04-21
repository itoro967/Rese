import React from 'react';
import Header from '@/common/header';

export default function AppLayout({children}) {
      const items = [
          ['logout',route('admin.logout'),'get'],
      ];
  return (
    <>
      <Header menuItems={items}/>
      <main className="m-3 pt-10 flex justify-center">{children}</main>
    </>
  );
}