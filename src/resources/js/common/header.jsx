import '../../css/header.css';
import menu from 'img/menu.svg';
import search from 'img/search.svg';
import Dropdown from '@/common/dropdown.jsx';
import { useForm } from '@inertiajs/react';
export default function Header(props) {
    return (
        <header className="shadow-md flex justify-between items-center bg-white fixed top-0 w-full z-10">
            <div className="flex items-center">
                <img className="m-2 bg-blue-500 p-1 rounded-md cursor-pointer hover:bg-blue-600" src={menu} alt="" />
                <span className="header_title">Rose</span>
            </div>
            {typeof props.genres == 'undefined' ? null : <SearchBox {...props} />}
        </header>
    );
}

function SearchBox({ genres, areas }) {
    const { data, setData,get } = useForm({ genre: null, area: null, keyword: '' });
    function submit(e){
        e.preventDefault();
        get('/', {only:['restaurants'] ,preserveState: true}
        );
    }
    return (
        <form onSubmit={submit} className="search_box flex items-center mx-3">
            <Dropdown group_name="genre" items={genres.map(g=>g.name)} formData={data.genre} setData={setData}  />
            <Dropdown group_name="area" items={areas.map(a=>a.name)} formData={data.area} setData={setData} />
            <div>
                <input type="text" className="search_input" placeholder="Search..." value={data.keyword} onChange={e => setData('keyword', e.target.value)}/>
            </div>
        </form>
    );
}