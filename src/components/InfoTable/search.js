import Image from "../Image"
import logo from "../images/magnifying-glass-solid.svg"

function Search() {
    return (
        <div className="search">
            <input className="search-input search-desktop" placeholder="Введите название Вашей зависимости и получите краткую консультацию бесплатно..." ></input>
            <input className="search-input mobile mobile-search" placeholder="Поиск..." ></input>
            <button className="search-btn">
                <div className="dd">
                    Найти... 
                </div>
                
                <div className="mobile mobile-search">
                    <Image image = {logo} />
                </div>
            </button>
        </div>
    )
}

export default Search