import React from "react";
import Image from "../Image";
import logo from "../images/magnifying-glass-solid.svg";

function Search() {
    const handleSearch = async (e) => {
        const res = document.getElementById("result-field");
        const query = e.target.value.trim();

        if (query === "") {
            res.classList.add("hidden");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/getSearchData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ value: query })
            });

            const data = await response.json();
            res.textContent = data.foundText && data.title
                ? data.title
                : "По Вашему запросу ничего не найдено";
        } catch (error) {
            console.error('Error:', error);
            res.textContent = "Произошла ошибка при выполнении запроса";
        }

        res.classList.remove("hidden");
    };

    const closeResultField = () => {
        const res = document.getElementById("result-field");
        res.classList.add("hidden");
    };

    return (
        <div className="search">
            <div className="search-input-place">
                <input
                    onBlur={closeResultField}
                    onFocus={handleSearch}
                    onChange={handleSearch}
                    className="search-input search-desktop"
                    placeholder="Введите название Вашей зависимости и получите краткую консультацию бесплатно..."
                />
                <div className="hidden absoluteCenter" id="result-field">
                    По Вашему запросу ничего не найдено
                </div>
            </div>
            <button className="search-btn">
                <div className="dd">
                    Найти...
                </div>
                <div className="mobile mobile-search">
                    <Image image={logo} />
                </div>
            </button>
        </div>
    );
}

export default Search;
