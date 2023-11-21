import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Header from "./components/Header"
import MainInfo from "./components/InfoTable/MainInfo"
import News from "./components/news/News";
import Laws from "./components/laws/Laws";
import Species from "./components/species/Species";
import Footer from "./components/Footer";
    
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainInfo />} />
                    
                    <Route path="news" element={<News />} />
                    <Route path="laws" element={<Laws />} />
                    <Route path="species" element={<Species />} />
                </Routes>
            </BrowserRouter>
        )
    }
} 

export default App