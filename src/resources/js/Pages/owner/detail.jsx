import OwnerAppLayout from "@/Layout/OwnerAppLayout";
import { Link } from "@inertiajs/react";
import { IoIosArrowBack } from "react-icons/io";

function ReservationsTable({reservations}){
    return (
        <div className="shrink-0 w-100 bg-blue-500 rounded-md p-3 text-white">
            <div className="font-bold text-2xl my-2">予約状況</div>
            <div className="table-auto h-120 overflow-y-auto">
                <table className="w-full">
                    <thead className="bg-blue-400 sticky top-0">
                        <tr>
                            <th className="border border-gray-300 w-25">Date</th>
                            <th className="border border-gray-300 w-18">Time</th>
                            <th className="border border-gray-300 w-20">Name</th>
                            <th className="border border-gray-300 w-18">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (
                            <tr key={reservation.id}>
                                <td className="border border-gray-300 text-center">{reservation.date}</td>
                                <td className="border border-gray-300 text-center">{reservation.time}</td>
                                <td className="border border-gray-300 text-center">{reservation.user.name}</td>
                                <td className="border border-gray-300 text-center">{reservation.guest_count}人</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function App({ restaurant }) {
    return (
        <OwnerAppLayout >
            <div className="flex justify-center gap-10 mx-10 h-140">
                <div className="h-full w-1/2">
                    <div className="font-bold text-3xl flex items-center">
                        <Link href={route('owner.index')} className="m-2"><IoIosArrowBack className=" size-6 fill-black bg-white rounded-md cursor-pointer hover:bg-gray-100" /></Link>
                        <span className="m-2">{restaurant.name}</span>
                    </div>
                    <img src={restaurant.image_url} className="object-contain w-150"/>
                    <div className="my-3">#{restaurant.area.name} #{restaurant.genre.name}</div>
                    <div className="whitespace-pre-wrap">{restaurant.description}</div>
                </div>
                <ReservationsTable reservations={restaurant.reservations} />
            </div>
        </OwnerAppLayout>
    );
}