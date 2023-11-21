import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "../Image"

class StoriesBlock extends React.Component {

    render() {

        return(
            <div className="storiesBlock">
                <div className="story-image absoluteCenter">
                    <Image image={this.props.background} />
                </div>
                
                <div className="story-text ">
                    <div className="absoluteCenter story-title ">
                        {this.props.title}
                    </div>

                    <div className="story-info">
                        {this.props.info}
                    </div>
                </div>
            </div>
        )
    }
}

export default StoriesBlock