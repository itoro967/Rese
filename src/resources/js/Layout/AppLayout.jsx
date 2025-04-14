import React from 'react';
import Header from '@/common/header';

export default function AppLayout({ children, genres, areas, user }) {
  return (
    <>
      <Header genres={genres} areas={areas} user={user} />
      <main className="m-3 pt-10 flex justify-center">{children}</main>
    </>
  );
}