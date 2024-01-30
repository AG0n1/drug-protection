import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Info from "./Info";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

class Forum extends React.Component {
    render() {
        const style = {
            background: "#121212",
        }

        const forum = () => {
            console.log(1)
        }

        return(
            <div className="forumElem">
                <div className="forum-nav">
                    <div className="forum-nav-choose">
                        <ul>
                            <li onClick={forum} className="absoluteCenter" >
                                Форум
                            </li>
                            <li onClick={forum} className="absoluteCenter" >
                                FaQ 
                            </li>
                            <li onClick={forum} className="absoluteCenter" >
                                Истории
                            </li>
                        </ul>
                    </div>

                    <div className="forum-nav-list">
                        <ul className="forum-tree" >
                            <li className="lvl-1">
                                Текст1
                            </li>
                            <li className="lvl-1" >
                                Текст2
                            </li>
                            <li className="lvl-1" >
                                Текст3
                            </li>
                            <li className="lvl-1" >
                                Текст4
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="forum-info">

                </div>

                
            </div>
                
        )
    }
        
}

export default Forum