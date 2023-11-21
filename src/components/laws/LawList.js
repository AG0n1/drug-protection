import React from "react"
import * as ReactDOMClient from 'react-dom/client'

class LawList extends React.Component {

    render() {
        const style = {
            color: "red",
        }
        return(
            <div className="law-list">
                <div className="list-number absoluteCenter">
                    {this.props.listNumber}
                </div>

                <div className="law-info">
                    {this.props.lawInfo}
                </div>
            </div>
        )
    }
}

export default LawList;