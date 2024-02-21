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
                <div className="contact-block-text">
                    <div className="contact-title">
                        {this.state.title}
                    </div>
                    <a href="https://t.me/DrugFreeUbot" id="btn">
                            <Image image={telegramLogo} />
                            <h1>
                                Свяжитесь с нами
                            </h1>
                    </a>
                </div>
                <div className="contact-logo">
                    
                </div>
            </div>
                
        )
    }
    
    
    
}

export default Contact