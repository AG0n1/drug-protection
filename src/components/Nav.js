import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="header-nav absoluteCenter">
                <Link className="header-link" to="/">Главная</Link>
                <Link className="header-link" to="/forum">Полезная информация</Link>
                <Link className="header-link" to="/support">Техническая Поддержка</Link>
            </div>
            )
    }
}

export default Nav