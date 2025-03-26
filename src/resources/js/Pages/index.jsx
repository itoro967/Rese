import AppLayout from '@/Layout/AppLayout';
import favorite from 'img/favorite.svg';
import { Link } from '@inertiajs/react';

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
        <Link href={`/detail/${data.id}`} className="inline-block text-white bg-blue-500 px-2 py-1 mx-2 my-6 rounded-lg shadow-lg active:shadow-none ">詳しく見る</Link>
        <img src={favorite} className="inline size-10 cursor-pointer fill-red-600 hover:size-11 active:size-10" />
      </div>
    </div>
  </div>)
}

export default function App({ restaurants,genres,areas }) {
  return (
    <AppLayout genres={genres} areas={areas}>
      <div className="flex flex-wrap md gap-3">
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
      </AppLayout>
  );
}
