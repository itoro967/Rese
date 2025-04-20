import AppLayout from '@/Layout/AppLayout';
import { FaClock } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RestaurantsCard } from '@/common/restaurantsCard';
import ReservationForm from '@/common/reservationForm';
import { useState } from 'react';
import { Link } from "@inertiajs/react";

function ReservationCorrectModal({restaurant,setIsOpen,correct}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-99 text-black" onClick={()=>setIsOpen(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <ReservationForm restaurant={restaurant} correct={correct} submitFunc={()=>setIsOpen(false)} />
      </div>
    </div>
  );
}

// 予約状況
function ReservationCard({index,reservation}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-blue-500 rounded-md p-3 shadow-md text-white w-80 my-2">
          <div className="flex items-center">
            <FaClock className="inline-block mx-1 my-3"/>
            <span className="mx-3 grow">予約{index+1}</span>
            <Link href={route('reservation.destroy')} method="post" data={{id: reservation.id}} only={[`reservations`]}>
            <IoIosCloseCircleOutline className="size-5 cursor-pointer" />
            </Link>
            </div>
          <table>
            <tbody>
              <tr>
                <td className="w-22">Shop</td>
                <td>{reservation.restaurant.name}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{reservation.date}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{reservation.time}</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>{reservation.guest_count}人</td>
              </tr>
            </tbody>
          </table>
          <div className="text-right cursor-pointer" onClick={()=>setIsOpen(true)} >予約内容変更</div>
          {isOpen && 
            <ReservationCorrectModal restaurant={reservation.restaurant} setIsOpen={setIsOpen}
              correct={
                {id: reservation.id,
                  date: reservation.date,
                  time: reservation.time,
                  guest_count: reservation.guest_count,
                }
              }/>
          }
        </div>
    );
}
function Reservation({reservations}) {
  return (
    <div className="mx-2">
      <div className="font-bold text-2xl m-5">予約状況</div>
        {reservations.map((reservation,index) => (
          <ReservationCard key={index} index={index} reservation={reservation}/>
        ))}
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
export default function App({user,restaurants,reservations}) {
  return (
    <AppLayout user={user}>
      <Reservation reservations={reservations} />
      <FavoriteRestaurant restaurants={restaurants} />
    </AppLayout>
  );
}
