import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "./Image"
import telegramLogo from "./images/Telegram_logo.svg.webp"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Наша миссия - помочь вам справиться с зависимостями"
        }
    }

    render() {
        return (
            <div className="contact-block">
                <div className="contact-block-text">
                    <div className="contact-title">
                        {this.state.title}
                    </div>
                    <a target="_blank" href="https://t.me/DrugFreeUbot" id="btn">
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