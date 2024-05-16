import React from "react"
import * as ReactDOMClient from 'react-dom/client'

class StoriesBlock extends React.Component {

    render() {

        return(
            <div className="storiesBlock">
                <div className="story-text ">
                    <div className="absoluteCenter story-title ">
                        {this.props.title}
                    </div>

                    {
                        this.props.info
                    }
                </div>
            </div>
        )
    }
}

export default StoriesBlock