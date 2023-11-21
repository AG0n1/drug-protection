import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import NewsBlockSmall from "./NewsBlockSmall"
import NewsBlockLarge from "./NewsBlockLarge"

import logo1 from "./images/logo1.jpg"
import logo2 from "./images/logo2.jpg"
import logo3 from "./images/logo3.jpg"
import logo4 from "./images/logo4.jpg"
import logo5 from "./images/logo5.jpg"
import logo6 from "./images/logo6.jpg"
import logo7 from "./images/logo7.jpg"
import logo8 from "./images/logo8.jpg"



class News extends React.Component {

    render() {

        const text = {
            title1: "написать про то, как милиция схватила школьников на вечеринке",
            like1: 2,
            dislike1: 3,

            title2: "написать о статье про пагубное воздействие наркотиков",
            like2: 4,
            dislike2: 5,


        }
        
        return (
            <div className="pos-rel container">
                <div className="infoBlock newsBlock">

                    <NewsBlockLarge title={text.title1} like={text.like1} dislike={text.dislike1} image={logo1} />
                    <NewsBlockSmall title={text.title2} like={text.like2} dislike={text.dislike2} image={logo2} />
                    <NewsBlockSmall title="Некий другой заголовок" image={logo3} />
                    <NewsBlockLarge title="Еще один заголовок" image={logo4} />
                    <NewsBlockSmall title="Дополнительный заголовок" image={logo5} />
                    <NewsBlockSmall image={logo6} />
                    <NewsBlockSmall image={logo7} />
                    <NewsBlockSmall title={text.title1} image={logo8} />
                    <NewsBlockSmall />
                    <NewsBlockSmall />
                </div>
            </div>
            
            )
    }
}

export default News