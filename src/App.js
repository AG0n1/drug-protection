import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from "./components/Header"
import MainInfo from "./components/InfoTable/MainInfo"
import Laws from "./components/laws/Laws";
import Forum from './components/forum/Forum';
import Registration from "./components/Registration";
import UserPage from './components/userPage/UserPage';
import { UserProvider } from './components/UserContext';

import Test from './test';

function App() {
    // if (localStorage.getItem("token") !== null) {
    //     fetch("http://localhost:3001/isActiveUser", {
    //         method: "POST",
    //         headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${localStorage.getItem('token')}` 
    //         },
    //         body: JSON.stringify({token: localStorage.getItem("token")})
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (!data.isActive) {
    //             localStorage.setItem("token", null)   
    //         }
    //     })
    // }
    const deleteToken = () => {
        localStorage.setItem("token", "null")
        localStorage.setItem("userData", JSON.stringify({
            nickname: "",
            name: "",
            second_name: "",
            email: "",     
            telegram_id: "",
            donate_value: "",
            description: "",
            background: "",
        }))
    }
    return (
        <UserProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route 
                        path = "/" 
                        element={
                            <MainInfo />
                         } />

                    <Route 
                        path = "test" 
                        element={
                            <Test />
                         } />
                    <Route 
                        path = "laws" 
                        element ={
                              <Laws />
                        } />

                    <Route 
                        path = "forum" 
                        element={
                            <Forum />
                        } />

                    <Route 
                        path = "user" 
                        element={
                            <UserPage />
                        } />
                </Routes>
                <Registration display="none" />
            </BrowserRouter>
            <button style={{position: "absolute", top: "0", left: "0", zIndex: "100000"}} onClick={deleteToken} >Log out</button>
        </UserProvider>
    )
} 

export default App