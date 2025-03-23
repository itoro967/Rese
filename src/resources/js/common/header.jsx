import '../../css/header.css';
import menu from 'img/menu.svg';
import Dropdown from 'common/dropdown.jsx';
export default function Header() {
    return (
        <header className="shadow-md flex justify-between items-center">
            <div className="flex items-center">
                <img className="m-2" src={menu} alt="" />
                <span className="header_title">Rose</span>
            </div>
            <SearchBox />
        </header>
    );
}

function SearchBox() {
    return (
        <div className="search_box">
            <Dropdown items={[1,2,3,4,5]} />
            <Dropdown items={[1,2,3,4,5]} />
            <input type="text" className="search_input" placeholder="Search..." />
        </div>
    )
}