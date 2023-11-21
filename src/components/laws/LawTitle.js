import React from "react"
import * as ReactDOMClient from 'react-dom/client'


class LawTitle extends React.Component {

    render() {
        return(
            <div id={this.props.id} className="laws-title">
                Статья №{this.props.lawNumber}
            </div>
        )
    }
}

export default LawTitle;