import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Image from "../Image"
import like from "./images/like.svg"
import dislike from "./images/dislike.svg"



class NewsBlockSmall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likeCount: this.props.like,
            dislikeCount: this.props.dislike,
            liked: false,
            disliked: false
        };

        this.PlusLike = this.PlusLike.bind(this);
        this.PlusDislike = this.PlusDislike.bind(this);
    }

    PlusDislike() {
        if (this.state.disliked) {
            this.setState((prevState) => ({
                disliked: false,
                dislikeCount: prevState.dislikeCount - 1,
            }))
        } else {
            if (this.state.liked) {
                this.setState((prevState) => ({
                    liked: false,
                    likeCount: prevState.likeCount - 1,
                    dislikeCount: prevState.dislikeCount + 1,
                    disliked: true,
                }))
            } else {
                this.setState((prevState) => ({
                    disliked: true,
                    dislikeCount: prevState.dislikeCount + 1
                }))
            }
        }
    }

    PlusLike() {
        if (this.state.liked) {
            this.setState((prevState) => ({
                liked: false,
                likeCount: prevState.likeCount - 1
            }))
        } else {
            if (this.state.disliked) {
                this.setState((prevState) => ({
                    liked: true,
                    likeCount: prevState.likeCount + 1,
                    disliked: false,
                    dislikeCount: prevState.dislikeCount - 1
                }))
            } else {
                this.setState((prevState) => ({
                    liked: true,
                    likeCount: prevState.likeCount + 1,
                }))
            }
        }
    }
    
    render() {
        const style = {
            backgroundImage: `url(${this.props.image})`,
        }

        return (
            <div style={style} className="news-block news-block-small">
                <div className="dark-text">
                    <h1 className="news-title" >
                        {this.props.title}
                    </h1>
                    <div className="likes-dislikes">
                        <div onClick={this.PlusLike}>
                            <Image image={like} />
                        </div>
                        
                        <h1 className="likes">
                            {this.state.likeCount}
                        </h1>

                        <div onClick={this.PlusDislike} >
                            <Image image={dislike} />
                        </div>
                        
                        <h1 className="likes">
                            {this.state.dislikeCount}
                        </h1>
                    </div>
                </div>
                
            </div>  
            )
    }
}

export default NewsBlockSmall