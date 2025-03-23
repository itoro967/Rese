import React from 'react';
import Header from '../common/header';

function RestaurantsCard({ img_url }) {
  return (<div className="size-80 relative shadow-md rounded-md">
    <img src={img_url} className="rounded-t-md"/>
    <div className="h-1/2 w-full absolute bottom-0 bg-white">
      <div>店名</div>
      <div>ジャンル</div>
    </div>
  </div>)
}

export default function App({ image_url }) {
  return (
    <>
      <Header />
      <div className="flex gap-3 m-3">
        <RestaurantsCard img_url={image_url} />
        <RestaurantsCard img_url={image_url} />
        <RestaurantsCard img_url={image_url} />
        <RestaurantsCard img_url={image_url} />
      </div>
    </>
  );
}