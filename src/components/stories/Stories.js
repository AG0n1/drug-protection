import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import StoriesBlock from "./StoriesBlock"

import logo1 from "../images/Hashish.jpg"
import logo2 from "../images/formula.png"

class Stories extends React.Component {

    render() {

        return(
            <div className="container">
                <div className="storiesMain">
                    <StoriesBlock background={logo1} title="История 1" info="Тут об истории 1" />
                    <StoriesBlock background={logo2} title="История 2" info="Тут об истории 2" />
                    <StoriesBlock />
                    <StoriesBlock />
                    <StoriesBlock />
                    <StoriesBlock />
                    
                </div>
            </div>
        )
    }
}

export default Stories