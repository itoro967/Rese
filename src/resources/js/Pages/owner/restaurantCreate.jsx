import OwnerAppLayout from "@/Layout/OwnerAppLayout";
import {useForm} from "@inertiajs/react";

function Select({id="",items,name, setData}) {
  return (
    <select id={id} className="m-2 border-b border-gray-400 w-60" onChange={e => setData(name, e.target.value)}>
      <option value="" hidden>選択してください</option>
      {items.map((item) => (
        <option key={item.name} value={item.id}>{item.name}</option>
      ))}
    </select>
  );
}
function Image({image,setData}) {
  return (
    <div className="m-2 text-center">
      {image ?
        <img src={URL.createObjectURL(image)} alt="Selected" className="h-32 object-cover" />
        : <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">No Image</div>}
        <label htmlFor="image" className="inline-block cursor-pointer bg-blue-500 text-white rounded-md py-1 px-2 my-1">画像を選択</label>
        <input id="image" type="file" className="hidden" accept="image/*" onChange={e => setData("restaurant_image", e.target.files[0])} />
    </div>
  );
}

export default function App({ areas, genres}) {
  const {data, setData, post, errors} = useForm({
    restaurant_name: "",
    area: "",
    genre: "",
    description: "",
    restaurant_image: null,
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("restaurant.store"));
  };
  return (
    <OwnerAppLayout>
      <form onSubmit={submit} className ="bg-white shadow-md rounded-md m-10">
        <div className="bg-blue-500 text-white rounded-t-md p-2">店舗情報作成</div>
        <div className="flex items-center flex-col">
        <span>店舗画像</span>
        {errors.restaurant_image && <div className="text-red-500">{errors.restaurant_image}</div>}
        <Image image={data.restaurant_image} setData={setData} />
        </div>

        {errors.restaurant_name && <div className="text-red-500">{errors.restaurant_name}</div>}
        <div className="flex justify-between items-center">
          <label htmlFor="name">店舗名</label>
          <input className="m-2 border-b border-gray-400 w-60" id="name" name="restaurant_name" value={data.restaurant_name} onChange={(e) => setData("restaurant_name", e.target.value)}/>
        </div>

        {errors.area && <div className="text-red-500">{errors.area}</div>}
        <div className="flex justify-between items-center">
          <label htmlFor="area">エリア</label>
          <Select id="area" items={areas} name="area" setData={setData}/>
        </div>

        {errors.genre && <div className="text-red-500">{errors.genre}</div>}
        <div className="flex justify-between items-center">
          <label htmlFor="genre">ジャンル</label>
          <Select id="genre" items={genres} name="genre" setData={setData}/>
        </div>

        {errors.description && <div className="text-red-500">{errors.description}</div>}
        <div className="flex justify-between items-center">
          <label htmlFor="description">店舗説明</label>
          <textarea id="description" name="description" value={data.description} onChange={(e) => setData("description", e.target.value)} className="m-2 border border-gray-400 w-60 h-32"></textarea>
        </div>

        <button type="submit" className="cursor-pointer bg-blue-500 text-white rounded-md py-1 px-2 m-3 float-right">店舗情報作成</button>
      </form>
    </OwnerAppLayout>
  );
}
