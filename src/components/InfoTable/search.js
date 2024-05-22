import Image from "../Image"
import logo from "../images/magnifying-glass-solid.svg"

function Search() {

    fetch("http://localhost:3001/getSearchData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({value: ""})
    })
    .then(res => res.json())
    .then(data => {
        
    })

    const func = (e) => {
        let res = document.getElementById("result-field")
        if (e.target.value.trim() === "") {
            res.classList.add("hidden")
            return
        } else {
            

            res.classList.remove("hidden")
        }
    }

    const closeRes = () => {
        let res = document.getElementById("result-field")
        res.classList.add("hidden")
    }

    return (
        <div className="search">
            <div className="search-input-place">
                <input onBlur={closeRes} onFocus={func} onChange={func} className="search-input search-desktop" placeholder="Введите название Вашей зависимости и получите краткую консультацию бесплатно..." />
                <div className="hidden absoluteCenter" id="result-field">
                    По Вашему запросу ничего не найдено
                </div>
            </div>
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