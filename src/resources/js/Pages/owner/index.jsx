import OwnerAppLayout from "@/Layout/OwnerAppLayout";
import { Link } from '@inertiajs/react';
import { IoMdStar } from "react-icons/io";
function Restaurant({restaurant}) {
  const ratingElements = [];
  for (let i = 0; i <= restaurant.rating_average -1; i++) {
    ratingElements.push(<IoMdStar className="text-yellow-500 inline size-5" key={i} />);
  }
  for (let i = 0; i < 5 - restaurant.rating_average; i++) {
    ratingElements.push(<IoMdStar className="text-gray-300 inline size-5" key={i + 3} />);
  }
  return (
    <div className="flex m-2 bg-white rounded-lg shadow-md w-100">
      <img src={restaurant.image_url} alt="Restaurant" className="w-40 h-40 rounded-l-lg object-cover object-left" />
      <div className="flex-grow">
        <div className="text-lg font-bold p-2">{restaurant.name}</div>
        <div>
          <span className="p-2 text-gray-700">#{restaurant.area.name}</span>
          <span className="p-2 text-gray-700">#{restaurant.genre.name}</span>
        </div>
        <div className="p-2">
          <div className="flex items-center">評価:{ratingElements}
            <span className="mx-1">{Math.round(restaurant.rating_average*10)/10}</span>
          </div>
          <div>予約数: {restaurant.reservations_count}</div>
        </div>
        <Link href={route('owner.detail',restaurant.id)} className="inline-block text-white bg-blue-500 hover:bg-blue-600 px-2 mx-5 rounded-lg shadow-lg active:shadow-none">詳しく見る</Link>
      </div>
    </div>
  );
}
export default function App( {restaurants}) {
  return (
    <OwnerAppLayout>
      <div className="">
        {restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant} key={restaurant.id}/>
        ))}
      </div>
    </OwnerAppLayout>
  );
}
