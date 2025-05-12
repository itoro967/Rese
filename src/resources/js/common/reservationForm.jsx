import {useForm } from "@inertiajs/react";
export default function ReservationForm({ restaurant,correct,submitFunc=()=>{}}) {
    const url = correct ? route('reservation.update',correct.id) : route('reservation.store');
    const submitText = correct ? "予約内容変更" : "予約する";
    const { data, setData, post,errors } = useForm({
        date: correct ? correct.date : "",
        time: correct ? correct.time : "",
        guest_count: correct ? correct.guest_count : "1",
        restaurant_id: restaurant.id 
        });
    function submit(e) {
        e.preventDefault();
        submitFunc();
        post(url,{only: ['reservations']});
    };
    return (
        <div className="shrink-0 w-100 bg-blue-500 rounded-md">
            <form onSubmit={submit} className="relative h-full min-h-100 p-3" >
                <div>
                    <div className="font-bold text-2xl my-2 text-white">予約</div>
                    {errors.date && <div className="text-red-500">{errors.date}</div>}
                    <input type="date" value={data.date} onChange={e => setData('date', e.target.value)} className="bg-white border rounded-md w-32 h-6 my-2" />
                    {errors.time && <div className="text-red-500">{errors.time}</div>}
                    <input type="time" value={data.time} onChange={e => setData('time', e.target.value)} className="bg-white border w-full rounded-md h-6 my-2" />
                    {errors.guest_count && <div className="text-red-500">{errors.guest_count}</div>}
                    <select className="bg-white border rounded-md w-full  my-2 h-6" value={data.guest_count} onChange={e => setData('guest_count', e.target.value)}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<option key={i} value={i}>{i}人</option>))}
                    </select>
                </div>

                <div className="text-white bg-white/20 rounded-md p-3 my-2">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="w-22">Shop</td>
                                <td>{restaurant.name}</td>
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
                                <td>{data.guest_count}人</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <input type="submit" value={submitText} className="bg-blue-700 text-white rounded-md w-full -mx-3 h-10 cursor-pointer absolute bottom-0" />
            </form>
        </div>
    )
}