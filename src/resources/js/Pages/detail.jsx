import AppLayout from "@/Layout/AppLayout";
import { Link, useForm } from "@inertiajs/react";
import { IoIosArrowBack } from "react-icons/io";
function ReservationCard({ name }) {
    const { data, setData, post } = useForm({ date: "", time: "", gest_count: "1" });
    function submit(e) {
        e.preventDefault();
        post("/");
    };
    return (
        <div className="shrink-0 w-100 bg-blue-500 rounded-md">
            <form onSubmit={submit} className="relative h-full p-3" >
                <div>
                    <div className="font-bold text-2xl my-2">予約</div>
                    <input type="date" value={data.date} onChange={e => setData('date', e.target.value)} className="bg-white border rounded-md w-32 h-6 my-2" />
                    <input type="time" value={data.time} onChange={e => setData('time', e.target.value)} className="bg-white border w-full rounded-md h-6 my-2" />
                    <select className="bg-white border rounded-md w-full  my-2 h-6" value={data.gest_count} onChange={e => setData('gest_count', e.target.value)}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<option key={i} value={i}>{i}人</option>))}
                    </select>
                </div>

                <div className="text-white bg-white/20 rounded-md p-3 my-2">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="w-22">Shop</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{data.date == "" ? "選択してください" : data.date}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{data.time == "" ? "選択してください" : data.time}</td>
                            </tr>
                            <tr>
                                <td>Number</td>
                                <td>{data.gest_count}人</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <input type="submit" value="予約する" className="bg-blue-700 text-white rounded-md w-full -mx-3 h-10 cursor-pointer absolute bottom-0" />
            </form>
        </div>
    )
}

export default function App({ restaurant }) {
    return (
        <AppLayout>
            <div className="flex justify-center gap-10 mx-10 h-140">
                <div className="h-full w-1/2">
                    <div className="font-bold text-3xl flex items-center">
                        <Link href="/" className="m-2"><IoIosArrowBack className=" size-6 fill-black bg-white rounded-md cursor-pointer hover:bg-gray-100" /></Link>
                        <span className="m-2">{restaurant.name}</span>
                    </div>
                    <img src={restaurant.image_url} className="object-contain w-150"/>
                    <div className="my-3">#{restaurant.area.name} #{restaurant.genre.name}</div>
                    <div>{restaurant.description}</div>
                </div>
                <ReservationCard name={restaurant.name} />
            </div>
        </AppLayout>
    );
}