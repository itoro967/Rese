import React from 'react';
import Header from '@/common/header';

export default function AdminAppLayout({ children, genres, areas, user }) {
      const items = [
          ['Home', '/','get'],
          user ? ['Mypage',route('mypage'),'get']:['Login', route('login'),'get'],
          user ? ['Logout', route('logout'),'post']:['Register', route('login.register'),'get'],
      ];
  return (
    <>
      <Header genres={genres} areas={areas} user={user} menuItems={items}/>
      <main className="m-3 pt-10 flex justify-center">{children}</main>
    </>
  );
}