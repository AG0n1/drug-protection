import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import LawZone from "./LawZone"
import LawTitle from "./LawTitle"


class Laws extends React.Component {

    render() {
        return(
            <div className="container" >
                <div className="laws-main">
                    <LawTitle id="first-law" lawNumber="328" />
                    <LawZone lawName="Незаконный оборот наркотических средств, психотропных веществ, их прекурсоров и аналогов" />
                </div>
            </div>
        )
    }
}

export default Laws;