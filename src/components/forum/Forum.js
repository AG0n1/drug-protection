import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FaQ from "./forumData/FaQ";
import UsersQuestions from "./forumData/UsersQuestion";
import Stories from "./Stories/Stories"
import StoriesList from "./Stories/StoriesList";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "forum", 
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const style = {
      background: "#121212",
    };

    const { currentPage } = this.state;

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
            {
                currentPage === "forum" && 
                    <ul className="forum-tree">
                        <li className="lvl-1">Текст1</li>
                        <li className="lvl-1">Текст2</li>
                        <li className="lvl-1">Текст3</li>
                        <li className="lvl-1">Текст4</li>
                    </ul>
            }

            {
                currentPage === "faq" && 
                    <ul className="forum-tree">
                        <li className="lvl-1">Текст1</li>
                        <li className="lvl-1">Текст2</li>
                        <li className="lvl-1">Текст3</li>
                        <li className="lvl-1">Текст4</li>
                    </ul>
            }

            {
                currentPage === "stories" && 
                    <div className="stories-list">
                        <div className="stories-list-elem">
                            Я жил в страхе, но не успокоился
                        </div>
                        <div className="stories-list-elem">
                            Как так можно жить? Адский круг этот не отпускает
                        </div>
                    </div>
            }
            
          </div>
        </div>
        <div className="forum-info">
          {currentPage === "forum" && <UsersQuestions />}
          {currentPage === "faq" && <FaQ />}
          {currentPage === "stories" && <Stories data="1" />}
        </div>
      </div>
    );
  }
}

export default Forum;
