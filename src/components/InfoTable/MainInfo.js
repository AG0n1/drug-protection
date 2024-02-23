import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client'
import Information from "./Information"
import Information2 from "./Information2"
import Contact from "../Contact"



function MainInfo() {
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
        <div>
            <Contact  />
            <Information id="first" />
            <Information2 />  
        </div>
    )
}

export default MainInfo