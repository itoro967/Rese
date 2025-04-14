import { MdFavorite,MdFavoriteBorder } from "react-icons/md";
import { Link } from '@inertiajs/react';

function FavoriteButton({ restaurant }) {
  const url = restaurant.is_favorite ? route('favorite.destroy') : route('favorite.store');
  const icon = restaurant.is_favorite ?
                <MdFavorite className="size-10 cursor-pointer fill-red-500 hover:size-11 active:size-10" />
                : <MdFavoriteBorder className="size-10 cursor-pointer fill-gray-300 hover:size-11 active:size-10" />;
  return(
    <Link href={url} method="post" data={{ restaurant_id: restaurant.id }} only={['restaurants']}>
      {icon}
  </Link>
  )
}
export function RestaurantsCard({ restaurant }) {
  return (<div className="size-70 relative shadow-lg rounded-md">
    <img src={restaurant.image_url} className="rounded-t-md"/>
    <div className="h-1/2 w-full absolute bottom-0 bg-white rounded-b-md">
      <div className="text-lg font-bold p-2" >{restaurant.name}</div>
      <div>
        <span className="p-2 fg-gray">#{restaurant.area.name}</span>
        <span className="p-2 fg-gray">#{restaurant.genre.name}</span>
      </div>
      <div className="flex justify-between items-center px-5">
        <Link href={route('detail',restaurant.id)} className="inline-block text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 mx-2 my-6 rounded-lg shadow-lg active:shadow-none ">詳しく見る</Link>
        
        { restaurant.is_favorite !=null ? <FavoriteButton restaurant={restaurant} />:null}

      </div>
    </div>
  </div>)
}