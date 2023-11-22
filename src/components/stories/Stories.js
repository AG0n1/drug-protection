import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import StoriesBlock from "./StoriesBlock"

import logo1 from "../images/Hashish.jpg"
import logo2 from "../images/formula.png"

class Stories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title1: "История 1",
            info1: "Инфа крч"
        }
    }

    render() {
        return(
            <div className="container">
                <div className="storiesMain">
                    <StoriesBlock background={logo1} title={this.state.title1} info={this.state.info1} />
                    <StoriesBlock background={logo2} title="История 2" info="Тут об истории 2" />
                    <StoriesBlock background={logo2} title="История 2" info="Тут об истории 2" />
                    <StoriesBlock background={logo2} title="История 2" info="Тут об истории 2" />
                    <StoriesBlock background={logo2} title="История 2" info="Тут об истории 2" />
                    <StoriesBlock background={logo2} title="История 2" info="Тут об истории 2" />
                    
                </div>
            </div>
        )
    }
}

export default Stories