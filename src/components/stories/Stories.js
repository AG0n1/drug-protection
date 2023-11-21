import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import StoriesBlock from "./StoriesBlock"

class Stories extends React.Component {

    render() {

        return(
            <div className="container">
                <div className="storiesMain">
                    <StoriesBlock background="" title="История 1" info="Тут об истории 1" />
                    <StoriesBlock />
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