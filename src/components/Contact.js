import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "./Image"
import telegramLogo from "./images/Telegram_logo.svg.webp"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Наша миссия - сделать мир безопаснее"
        }
    }

    render() {
        return (
            <div className="contact-block" id="contact">
                <div className="limit">
                    <div className="contact-block-text">
                        <h1 data-text={this.state.title} className="titleText">
                            {this.state.title}
                        </h1>
                        
                    </div>
                    <button id="btn">
                            <Image image={telegramLogo} />
                            <h1>
                                Свяжитесь с нами
                            </h1>
                    </button>
                </div> 
            </div>
                
        )
    }
    
    
    
}

export default Contact