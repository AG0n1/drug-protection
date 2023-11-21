import React from "react"
import * as ReactDOMClient from 'react-dom/client'



class Image extends React.Component {
    
    render() {
        return (
                <img className="logo" src={this.props.image} alt="img"/>
            )
    }
}

export default Image