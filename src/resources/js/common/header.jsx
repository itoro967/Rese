import '../../css/header.css';
import Dropdown from '@/common/dropdown.jsx';
import { Link,useForm } from '@inertiajs/react';
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

function Menu({ onClick,menuItems }) {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-white p-2">
            <IoCloseSharp className="size-[32px] xsm-2 fill-white bg-blue-500 p-1 rounded-md cursor-pointer hover:bg-blue-600" onClick={onClick} />
            <ul className="flex flex-col items-center p-30 h-full font-bold text-2xl text-blue-500 li.*:m-20">
                { menuItems.map((item, index) => (
                    <Link as="li" href={item[1]} key={index} method={item[2]} className="m-2 cursor-pointer hover:text-blue-600">
                        {item[0]}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default function Header(props) {
    const [open, setOpen] = useState(false);
    function toggleMenu() {
        setOpen(!open);
    }
    return (
        <header className="shadow-md flex justify-between items-center bg-white fixed top-0 w-full z-10">
            <div className="flex items-center">
                <GiHamburgerMenu className="m-2 size-[32px] xsm-2 fill-white bg-blue-500 p-1 rounded-md cursor-pointer hover:bg-blue-600" onClick={toggleMenu} />
                <span className="text-2xl">Rose</span>
            </div>
            {typeof props.genres == 'undefined' ? null : <SearchBox {...props} />}
            { open ? <Menu menuItems={props.menuItems} onClick={toggleMenu} /> : null }
            { route().current('mypage') ? <span className="mx-10 font-bold text-2xl">{props.user.name}</span> : null }
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
            <div className="flex outline-1 has-focus:outline-2 outline-blue-500 m-1 rounded-md" >
                <input type="text" className="search_input outline-none px-1" placeholder="Search..." value={data.keyword} onChange={e => setData('keyword', e.target.value)}/>
                <FaSearch className="size-6 p-1 fill-white bg-blue-500 rounded-r-md cursor-pointer hover:bg-blue-600" onClick={submit} />
            </div>
        </form>
    );
}