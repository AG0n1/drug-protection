import React, {Component} from "react"
import * as ReactDOMClient from 'react-dom/client'

import Image from "./Image"
import logo from "./images/header-logo.png"
import Nav from "./Nav"



class Header extends React.Component {
    render() {
        return (
            <header >
                <div className="container" id="header">
                    <div className="absoluteCenter">
                        <Image image={logo} />
                    </div>
                    <Nav />
                </div>
            </header>
    )
    }
}

export default Header