import React from 'react';
import Header from '@/common/header';

export default function AppLayout({ children, genres, areas }) {
  return (
    <>
      <Header genres={genres} areas={areas} />
      <main className="m-3 pt-10 flex justify-center">{children}</main>
    </>
  );
}