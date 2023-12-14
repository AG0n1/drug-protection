import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client'
import Information from "./Information"
import Information2 from "./Information2"
import Contact from "../Contact"



function MainInfo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api')
        .then((response) => response.json())
        .then((response) => setData(response.AG0n1.email))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    /*
        1 предложение про актуальность

        Технологии: пара предложений

        Функционал: 
            Демонстрация пользователю инфы
                сказать про руты
            Сервер
            
            Бот
            В конце рассказать про хакатон
        Упомянуть про гит
        избавится от хард кода
    */

    return (
        <div className="main-background">
            <div id="main-info" className="absoluteCenter container">
                <Contact  />
                <Information id="first" />
                <Information2 />

                    <p>
                        {
                            !data ? "Loading..." : data
                        }
                    </p>

                
            </div>
        </div>
    )
}

export default MainInfo