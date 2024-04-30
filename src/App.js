import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from "./components/Header"
import MainInfo from "./components/InfoTable/MainInfo"
import Laws from "./components/laws/Laws";
import Forum from './components/forum/Forum';
import Registration from "./components/Registration";
import UserPage from './components/userPage/UserPage';

function App() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route 
                        path = "/" 
                        element={
                            <MainInfo />
                        } />

                    <Route 
                        path = "laws" 
                        element={
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
        )
} 

export default App