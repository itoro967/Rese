import '../../css/header.css';
import menu from 'img/menu.svg';
import Dropdown from 'common/dropdown.jsx';
export default function Header({ genres, areas }) {
    return (
        <header className="shadow-md flex justify-between items-center bg-white fixed top-0 w-full z-10">
            <div className="flex items-center">
                <img className="m-2" src={menu} alt="" />
                <span className="header_title">Rose</span>
            </div>
            <SearchBox genres={genres} areas={areas} />
        </header>
    );
}

function SearchBox({ genres, areas }) {
    return (
        <div className="search_box">
            <Dropdown group_name="genre" items={genres.map(genre=>genre.name)} />
            <Dropdown group_name="area" items={areas.map(area=>area.name)}/>
            <input type="text" className="search_input" placeholder="Search..." />
        </div>
    )
}