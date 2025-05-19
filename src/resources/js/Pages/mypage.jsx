import AppLayout from '@/Layout/AppLayout';
import { FaClock } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RestaurantsCard } from '@/common/restaurantsCard';
import ReservationForm from '@/common/reservationForm';
import { useState } from 'react';
import { Link } from "@inertiajs/react";
import { IoMdStar } from "react-icons/io";
import { useForm } from '@inertiajs/react';

function ReservationCorrectModal({restaurant,setIsOpen,correct}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-99 text-black" onClick={()=>setIsOpen(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <ReservationForm restaurant={restaurant} correct={correct} submitFunc={()=>setIsOpen(false)} />
      </div>
    </div>
  );
}
function ReviewCardModal({setIsReviewOpen,id}) {
  const { data, setData, post, errors } = useForm({
    rating: 1,
    id: id,
    review: '',
  });

  const ratingInput = [1,2,3,4,5].map((i) => (
    <div key={i} className="flex items-center">
      <IoMdStar className={`size-10 cursor-pointer ${data.rating >=i ? 'text-yellow-500':'text-gray-300'}`} onClick={()=>setData('rating',i)}/>
    </div>
  )); 
  const submit = (e) => {
    e.preventDefault();
    post(route('reservation.review'), {onSuccess: () => {setIsReviewOpen(false)}});
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-99 text-black" onClick={()=>setIsReviewOpen(false)}>
      <form onSubmit={submit} className="bg-white rounded-md p-3 shadow-md text-black w-80" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center">
          <span className="font-bold text-2xl ">レビュー</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          {ratingInput}
        </div>
        <textarea className="w-full h-20 mt-3 border" placeholder="レビュー内容" value={data.review} onChange={(e) => setData('review', e.target.value)} />
          <button type="submit" className="cursor-pointer bg-blue-500 text-white rounded-md py-1 px-2 float-right">送信</button>
      </form>
    </div>
  );
}
// 予約状況
function ReservationCard({index,reservation}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
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
          <div className="flex justify-between items-center mt-3">
            <div className="font-bold cursor-pointer" onClick={()=>setIsReviewOpen(true)}>来店</div>
            <div className="text-right cursor-pointer font-bold" onClick={()=>setIsOpen(true)} >予約内容変更</div>
          </div>
          {isReviewOpen &&
            <ReviewCardModal setIsReviewOpen={setIsReviewOpen} id={reservation.id}/>
          }
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
