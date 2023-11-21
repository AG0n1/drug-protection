import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "../Image"
import logo from "../images/formula.png"

class Information extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            more: "Подробнее",
            hide: "",
            firstBlock: "Что такое наркотик?",
            firstInfoBlock: "Нарко́тик — согласно определению ВОЗ, «химический агент, вызывающий ступор, ко́му или нечувствительность к боли...",
            
            secondBlock: "Механизм действия",
            secondInfoBlock: "Практически все наркотики прямо или косвенно нацелены на «систему поощрения» мозга, увеличивая в 5-10 раз поток нейромедиаторов типа дофамина и серотонина в постсинаптических нейронах...",
        }

        this.onClick = this.onClick.bind(this)
        this.hide = this.hide.bind(this)
    }

    render() {
        return (
            <div className="infoBlock" id={this.props.id}>
                <div className="information">
                    <h1 data-text={this.state.firstBlock} className="titleText" >
                        {this.state.firstBlock}
                    </h1> 
                        <h1 data-text={this.state.firstInfoBlock} className="infoText">
                            {this.state.firstInfoBlock} 
                            <p className="show-hide" onClick={this.onClick}  > 
                                {this.state.more}
                            </p>

                            <p className="show-hide" onClick={this.hide}  > 
                                {this.state.hide}
                            </p>
                        </h1>
                </div>

                <div className="photo">
                    <Image image = {logo} />
                </div>
                    
            </div>
                
        )
    }
    
    hide() {
        this.setState(
            {
                firstInfoBlock: "Нарко́тик — согласно определению ВОЗ, «химический агент, вызывающий ступор, ко́му или нечувствительность к боли...",
                hide: "",
                more: "Подробнее",
            }
        )
    }

    onClick() {
        this.setState(
            {
                firstInfoBlock: 
                <div>
                    Нарко́тик — согласно определению ВОЗ, «химический агент, вызывающий ступор, ко́му или нечувствительность к боли. Термин обычно относится к опиатам или опиоидам, которые называются наркотическими анальгетиками».
                    <br />
                    <br />
                    Считается, что термин «ναρκωтιку́с» (наркотик) впервые был употреблён греческим целителем Гиппократом, — в частности, для описания веществ, вызывающих потерю чувствительности или паралич. Данный термин также употреблял выдающийся врач античности Клавдий Гален. В качестве таких веществ Гален, например, упоминал корень мандрагоры, семена эклаты и мака.
                </div>,
            more: "",
            hide: "Скрыть",
            }
        )
    }
    
    
}

export default Information