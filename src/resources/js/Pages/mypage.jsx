import AppLayout from '@/Layout/AppLayout';
import { FaClock } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RestaurantsCard } from '@/common/restaurantsCard';
// 予約状況
function Reservation() {
  return (
    <div className="mx-2">
      <div className="font-bold text-2xl m-5">予約状況</div>
      <div className="bg-blue-500 rounded-md p-3 shadow-md text-white w-80">
        <div className="flex items-center">
          <FaClock className="inline-block mx-1 my-3"/>
          <span className="mx-3 grow">予約1</span>
          <IoIosCloseCircleOutline className="size-5" />
          </div>
        <table>
          <tbody>
            <tr>
              <td className="w-22">Shop</td>
              <td>Restaurant Name</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>2023-10-01</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>18:00</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>4人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
// お気に入り店舗 
function FavoriteRestaurant({restaurants}) {
  return (
    <div className="mx-2">
      <div className="font-bold text-2xl m-5">お気に入り店舗</div>
      <div className="flex flex-wrap md gap-3">
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} restaurant={restaurant}/>
        ))}
      </div>
    </div>
  );
}
export default function App({user,restaurants}) {
  return (
    <AppLayout user={user}>
            <Reservation />
            <FavoriteRestaurant restaurants={restaurants} />
    </AppLayout>
  );
}
