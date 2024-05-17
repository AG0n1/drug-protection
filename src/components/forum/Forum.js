import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FaQ from "./forumData/FaQ";
import UsersQuestions from "./forumData/UsersQuestion";
import Stories from "./Stories/Stories"
import StoriesBlock from "./Stories/StoriesBlock";

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
        this.setState({ selectedForumItem: itemId });
    };
    

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

            </div>
        );
    }
}

export default Forum;