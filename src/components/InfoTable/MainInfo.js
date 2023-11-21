import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Information from "./Information"
import Information2 from "./Information2"
import Contact from "../Contact"



class MainInfo extends React.Component {
    render() {
        return (
            <div className="main-background">
                <div id="main-info" className="absoluteCenter container">
                    <Contact  />
                    <Information id="first" />
                    <Information2 />
                </div>
            </div>
        )
    }
}

export default MainInfo