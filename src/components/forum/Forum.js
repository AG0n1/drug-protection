import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FaQ from "./forumData/FaQ";
import UsersQuestions from "./forumData/UsersQuestion";
import Stories from "./forumData/Stories"

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "forum", // начальная страница - Форум
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
            {/* Используем Link из react-router-dom вместо обычных ссылок */}
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
            <ul className="forum-tree">
              <li className="lvl-1">Текст1</li>
              <li className="lvl-1">Текст2</li>
              <li className="lvl-1">Текст3</li>
              <li className="lvl-1">Текст4</li>
            </ul>
          </div>
        </div>
        <div className="forum-info">
          {/* В зависимости от currentPage рендерим соответствующий компонент */}
          {currentPage === "forum" && <UsersQuestions />}
          {currentPage === "faq" && <FaQ />}
          {currentPage === "stories" && <Stories />}
        </div>
      </div>
    );
  }
}

export default Forum;
