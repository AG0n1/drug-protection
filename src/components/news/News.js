import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import NewsBlockSmall from "./NewsBlockSmall"
import NewsBlockLarge from "./NewsBlockLarge"
import Image from "../Image"

import logo1 from "./images/logo1.jpg"
import logo2 from "./images/logo2.jpg"
import logo3 from "./images/logo3.jpg"
import logo4 from "./images/logo4.jpg"
import logo5 from "./images/logo5.jpg"
import logo6 from "./images/logo6.jpg"
import logo7 from "./images/logo7.jpg"
import logo8 from "./images/logo8.jpg"
import pill from "../images/pill.png"

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: 0,
            initialTop: 800,
            initialTop1: 400,
            rotVar: 57,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.pillRef1 = React.createRef();
        this.pillRef2 = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            initialTop: this.pillRef1.current.offsetTop,
            initialTop1: this.pillRef2.current.offsetTop,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({ scrollY: window.scrollY });
    }

    render() {
        const text = {
            title1: "написать про то, как милиция схватила школьников на вечеринке",
            like1: 190,
            dislike1: 12,

            title2: "написать о статье про пагубное воздействие наркотиков",
            like2: 44,
            dislike2: 8,

            title3: "написать о статье про пагубное воздействие наркотиков",
            like3: 63,
            dislike3: 13,

            title4: "написать о статье про пагубное воздействие наркотиков",
            like4: 209,
            dislike4: 13,
        }

        const parallaxCoefficient = 0.3; 
        const parallaxCoefficient1 = 0.4; 

        const pillStyle = {
            position: 'absolute',
            top: `${this.state.initialTop - this.state.scrollY * parallaxCoefficient}px`,
            left: '30px',
            transform: `rotate(${this.state.rotVar - this.state.scrollY * parallaxCoefficient}deg)`,
            filter: "blur(2px)",
        };

        const pillStyle1 = {
            position: 'absolute',
            top: `${this.state.initialTop1 - this.state.scrollY * parallaxCoefficient1}px`,
            transform: `rotate(${this.state.rotVar - this.state.scrollY * parallaxCoefficient}deg)`,
            left: '1400px',
        }
        

        return (
            <div>
                <div className="pos-rel container">
                    <div className="infoBlock newsBlock">
                        <NewsBlockLarge title={text.title1} like={text.like1} dislike={text.dislike1} image={logo1} />
                        <NewsBlockSmall title={text.title2} like={text.like2} dislike={text.dislike2} image={logo2} />
                        <NewsBlockSmall title={text.title3} like={text.like3} dislike={text.dislike3} image={logo3} />
                        <NewsBlockLarge title={text.title4} like={text.like4} dislike={text.dislike4} image={logo4} />
                        <NewsBlockSmall title="Дополнительный заголовок" image={logo5} />
                        <NewsBlockSmall image={logo6} />
                        <NewsBlockSmall image={logo7} />
                        <NewsBlockSmall title={text.title1} image={logo8} />
                        <NewsBlockSmall />
                        <NewsBlockSmall />
                    </div>
                </div>
                
                <div className="pill-news" id = "large-pill" style={pillStyle} ref={this.pillRef1}>
                    <Image image={pill} />
                </div>

                <div className="pill-news" style={pillStyle1} ref={this.pillRef2}>
                    <Image image={pill} />
                </div>
            </div>
            )
    }
}

export default News