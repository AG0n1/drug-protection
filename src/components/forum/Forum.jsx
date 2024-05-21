import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FaQ from "./forumData/FaQ";
import UsersQuestions from "./forumData/UsersQuestion";
import Stories from "./Stories/Stories"
import StoriesBlock from "./Stories/StoriesBlock";

import customer from "../images/customer.svg"
import user from "../images/user.svg"
import admin from "../images/admin.svg"
import tech from "../images/technical.svg"

class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "forum",
            selectedStory: "0",
            selectedForumItem: "0", 
        };
    }
    
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleForumClick = (itemId) => {
        
        fetch("http://localhost:3001/getMessages", {
            method: "POST",   
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({id: itemId})
        })
        .then(res => res.json())
        .then(data => {
            const placeForMessages = document.getElementById("place-for-messages");
            placeForMessages.textContent = ""
            console.log(data.slice(0, -2))
            let parsedObj = JSON.parse(`{${data.slice(0, -2)}}`)

            let userImage;

            for (let key in parsedObj) {
                const {status} = parsedObj[key]
                if (status === "admin") {
                    userImage = admin;
                } else if (status === "customer") {
                    userImage = customer;
                } else if (status === "tech") {
                    userImage = tech;
                } else {
                    userImage = user;
                }
                console.log(key.status)
                const {message, name} = parsedObj[key]
                const messageBlock = document.createElement("div");
                messageBlock.className = "message-block";
                messageBlock.innerHTML = `
                    <div class="user-message">
                        <div class="forum-photo-place">
                            <img src="${userImage}" alt="User status" width="30" height="30">
                        </div>
                        ${message}
                    </div>
                `;
                placeForMessages.appendChild(messageBlock);
            }

            console.log(parsedObj)
        })

        this.setState({ selectedForumItem: itemId });
    };
    
    showCreate = () => {
        let item = document.getElementById("create-question")
        item.classList.remove("hidden")
    }

    hideCreate = () => {
        let item = document.getElementById("create-question")
        item.classList.add("hidden")
    }

    handleStoryClick = (storyId) => {
        this.setState({ selectedStory: storyId });
    };

    render() {
        const { currentPage, selectedStory } = this.state;

        return (
            <div className="forumElem">
                <div className="forum-nav">
                    <div className="forum-nav-choose">
                        <Link
                            className="forum-link"
                            to="#"
                            onClick={() => this.handlePageChange("forum")}
                        >
                            Форум
                        </Link>
                        <Link
                            className="forum-link"
                            to="#"
                            onClick={() => this.handlePageChange("faq")}
                        >
                            FAQ
                        </Link>
                        <Link
                            className="forum-link"
                            to="#"
                            onClick={() => this.handlePageChange("stories")}
                        >
                            Истории
                        </Link>
                    </div>

                    <div className="forum-nav-list">
                        
                        {currentPage === "forum" && (
                            <div className="forum-list">
                                <div id="place-for-list">
                                    <div
                                        className={`forum-list-elem`}
                                        onClick={() => this.handleForumClick(1)}
                                    >
                                        Как избавиться от зависимости?
                                    </div>

                                    <div
                                        className={`forum-list-elem`}
                                        onClick={() => this.handleForumClick(2)}
                                    >   
                                        Как найти в себе силы?
                                    </div>

                                    

                                </div>
                                

                                <div className="create-new-theme">
                                    <button onClick={() => this.showCreate()} id="create-new-theme">
                                        Создать новую тему
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentPage === "stories" && (
                            <div className="stories-list">
                                <div
                                    className={`stories-list-elem ${selectedStory === 1 ? 'active' : ''}`}
                                    onClick={() => this.handleStoryClick(1)}
                                >
                                    Я жил в страхе, но не успокоился
                                    <div>Никита, 21 год</div>
                                </div>
                                <div
                                    className={`stories-list-elem ${selectedStory === 2 ? 'active' : ''}`}
                                    onClick={() => this.handleStoryClick(2)}
                                >   
                                    Как так можно жить? Адский круг...
                                    <div>Валерия, 20 лет</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="forum-info">
                    {currentPage === "forum" && <UsersQuestions id={this.state.selectedForumItem} />} 
                    {currentPage === "faq" && <FaQ />}
                    {currentPage === "stories" && selectedStory && <Stories data={selectedStory.toString()} />}
                </div>

                <div className="hidden absoluteCenter" id="create-question">
                    <div onClick={() => this.hideCreate()} className="create">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Forum;