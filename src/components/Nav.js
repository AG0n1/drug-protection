import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="header-nav absoluteCenter">
                <Link className="header-link" to="/">Главная</Link>
                <Link className="header-link" to="/forum">Форум</Link>
                <Link className="header-link" to="/laws">Законы и наказания</Link>
                <Link className="header-link" to="/news">Новости</Link>
            </div>
            )
    }
}

export default Nav