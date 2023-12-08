import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import Info from "./Info";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

class Forum extends React.Component {
    render() {
        return(
            <div className="forumElem">
                <div className="forum-info">

                </div>

                <div className="forum-nav">
                    <div className="forum-nav-choose">
                        <ul>
                            <li className="absoluteCenter" >
                                Форум
                            </li>
                            <li className="absoluteCenter" >
                                FaQ
                            </li>
                            <li className="absoluteCenter" >
                                Истории
                            </li>
                        </ul>
                    </div>

                    <div className="forum-nav-title">
                        
                    </div>

                    <div className="forum-nav-list">

                    </div>
                </div>
            </div>
                
        )
    }
        
}

export default Forum