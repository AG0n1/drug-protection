import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from "./components/Header"
import MainInfo from "./components/InfoTable/MainInfo"
import News from "./components/news/News";
import Laws from "./components/laws/Laws";
import Stories from "./components/stories/Stories";
import Forum from './components/forum/Forum';
import Registration from "./components/Registration";
// npx create-react-app
// npm i express
// npm i concurrently
// npm i mongoose
// npm i nodemon
function App() {

        

        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainInfo />} />
                    
                    <Route path="news" element={<News />} />
                    <Route path="laws" element={<Laws />} />
                    <Route path="stories" element={<Stories />}/>
                    <Route path="forum" element={<Forum />}/>
                    <Route path="forum/Faq" element={<Forum />} />
                </Routes>
                <Registration display="none" />
            </BrowserRouter>
        )
} 

export default App