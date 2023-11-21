import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "../Image"

class StoriesBlock extends React.Component {

    render() {
        const style = {
            background: this.props.background,
        }
        return(
            <div className="storiesBlock">
                <div className="story-image" style={style}>

                </div>

                <div className="story-text">
                    <div className="stroy-title">
                        {this.props.title}
                    </div>

                    <div className="stroy-info">
                        {this.props.info}
                    </div>
                </div>
            </div>
        )
    }
}

export default StoriesBlock