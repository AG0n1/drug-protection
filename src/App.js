import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from "./components/Header"
import MainInfo from "./components/InfoTable/MainInfo"
import Laws from "./components/laws/Laws";
import Forum from './components/forum/Forum';
import Registration from "./components/Registration";
import { UserProvider } from './components/UserContext';
import Footer from './components/Footer';

import AdminPage from './components/userPage/AdminPage';
import UserPage from './components/userPage/UserPage';
import CustomerPage from './components/userPage/CustomerPage';
import TechPage from './components/userPage/TechPage';
import SupportPage from './components/support/SupportPage';


function App() {
    
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

                    <Route
                        path="admin"
                        element = {
                            <AdminPage />
                        }
                    />

                    <Route 
                        path='tech'
                        element = {
                            <TechPage />
                        }
                    />

                    <Route 
                        path='customer'
                        element = {
                            <CustomerPage />
                        }
                    />

                    <Route
                        path="support"
                        element = {
                            <SupportPage />
                        }
                    />
                </Routes>
                <Registration display="none" />
            </BrowserRouter>
            <Footer />
        </UserProvider>
    )
} 

export default App