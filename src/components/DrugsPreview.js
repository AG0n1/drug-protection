import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "./Image"
import hashish from "./images/Hashish.jpg"
import marijuana from "./images/marijuana.jpg"
import mefedron from "./images/mefedron.jpg"



class DrugsPreview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Самые популярные наркотические вещества:"
        }
    } 

    render() {
        return (
                <div className="infoBlock preview">
                    <h1 data-text={this.state.title} className="titleText" >
                        {this.state.title}
                    </h1>
                    <div className="photoZone">
                    
                        <div className="Drugphoto">
                            <Image image={hashish} />
                            <div className="dark">
                                
                            </div>
                        </div>

                        <div className="Drugphoto">
                            <Image image={marijuana} />
                            <div className="dark">
                                
                            </div>
                        </div>

                        <div className="Drugphoto">
                        <Image image={mefedron} />
                        <div className="dark">
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            )
    }
}

export default DrugsPreview

/*

                        <Image image={hashish} />

                        <Image image={marijuana} />

                        <Image image={mefedron} />

*/