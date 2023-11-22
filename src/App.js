import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from "./components/Header"
import MainInfo from "./components/InfoTable/MainInfo"
import News from "./components/news/News";
import Laws from "./components/laws/Laws";
import Stories from "./components/stories/Stories";
import Registration from "./components/Registration";
    
function App() {

        

        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainInfo />} />
                    
                    <Route path="news" element={<News />} />
                    <Route path="laws" element={<Laws />} />
                    <Route path="stories" element={<Stories />}/>
                </Routes>
                <Registration display="none" />
                {
                    /*
                        <p>
                            {
                                !data ? "Loading.." : data
                            }
                        </p>
                    */
                }
            </BrowserRouter>
        )
} 

export default App