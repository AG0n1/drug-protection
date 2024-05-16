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
        };
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
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
                        {currentPage === "stories" && (
                            <div className="stories-list">
                                <div className="stories-list-elem" onClick={() => this.handleStoryClick(1)}>
                                    Я жил в страхе, но не успокоился
                                    <div>Никита, 21 год</div>
                                </div>
                                <div className="stories-list-elem" onClick={() => this.handleStoryClick(2)}>
                                    Как так можно жить? Адский кру...
                                    <div>Валерия, 20 лет</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="forum-info">
                    {currentPage === "forum" && <UsersQuestions />}
                    {currentPage === "faq" && <FaQ />}
                    {currentPage === "stories" && selectedStory && <Stories data={selectedStory.toString()} />}
                </div>
            </div>
        );
    }
}

export default Forum;

