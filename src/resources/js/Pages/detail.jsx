import AppLayout from "@/Layout/AppLayout";
import { Link,useForm } from "@inertiajs/react";
import back_icon from "img/arrow_back.svg";

export default function App({ restaurant }) {
    const { data, setData, post } = useForm({ date: "", time: "null", gest_count: "1" });
    function submit(e) {
        e.preventDefault();
        post("/");
    };
    return (
        <AppLayout>

            <div className="flex gap-10 mx-10">
                <div className="basis-1/2">
                    <div className="font-bold text-3xl flex items-center w-80 shrink-0">
                        <Link as="img" src={back_icon} href="/" className="cursor-pointer inline bg-white rounded-md shadow-md"></Link>
                        <span className="m-2">{restaurant.name}</span>
                        </div>
                    <img src={restaurant.image_url}/>
                    <div className="my-3">#{restaurant.area.name} #{restaurant.genre.name}</div>
                    <div>{restaurant.description}</div>
                </div>

                <form onSubmit={submit} className="bg-blue-400 basis-1/2 text-white" >
                    <div className="px-3">
                    <div className="font-bold text-2xl my-2">予約</div>
                    {/* <input type="text" value={data.date} onChange={e=>setData('date',e.target.value)} className="bg-white border rounded-md" /> */}
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}