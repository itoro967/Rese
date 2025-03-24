import React from 'react';
import Header from 'common/header';
import favorite from 'img/favorite.svg';

function RestaurantsCard({ data }) {
  return (<div className="size-70 relative shadow-lg rounded-md">
    <img src={data.image_url} className="rounded-t-md"/>
    <div className="h-1/2 w-full absolute bottom-0 bg-white rounded-b-md">
      <div className="text-lg font-bold p-2" >{data.name}</div>
      <div>
        <span className="p-2 fg-gray">#{data.area.name}</span>
        <span className="p-2 fg-gray">#{data.genre.name}</span>
      </div>
      <div className="flex justify-between items-center px-5">
        <a href="#" className="inline-block text-white bg-blue-500 px-2 py-1 mx-2 my-6 rounded-lg shadow-lg active:shadow-none ">詳しく見る</a>
        <img src={favorite} className="inline size-10 cursor-pointer fill-red-600 hover:size-11 active:size-10" />
      </div>
    </div>
  </div>)
}

export default function App({ restaurants,genres,areas }) {
  return (
    <>
      <Header genres={genres} areas={areas} />
      <div className="flex basis-3xs flex-wrap md gap-3 m-3 pt-20">
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </>
  );
}