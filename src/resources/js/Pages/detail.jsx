import AppLayout from "@/Layout/AppLayout";
import { Link } from "@inertiajs/react";
import { IoIosArrowBack } from "react-icons/io";
import ReservationForm from "@/common/reservationForm";

export default function App({ restaurant,user }) {
    return (
        <AppLayout user={user}>
            <div className="flex justify-center gap-10 mx-10 h-140">
                <div className="h-full w-1/2">
                    <div className="font-bold text-3xl flex items-center">
                        <Link href={route('index')} className="m-2"><IoIosArrowBack className=" size-6 fill-black bg-white rounded-md cursor-pointer hover:bg-gray-100" /></Link>
                        <span className="m-2">{restaurant.name}</span>
                    </div>
                    <img src={restaurant.image_url} className="object-contain w-150"/>
                    <div className="my-3">#{restaurant.area.name} #{restaurant.genre.name}</div>
                    <div>{restaurant.description}</div>
                </div>
                <ReservationForm restaurant={restaurant} />
            </div>
        </AppLayout>
    );
}