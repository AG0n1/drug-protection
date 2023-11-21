import React from "react"
import * as ReactDOMClient from 'react-dom/client'

class Species extends React.Component {
    render() {
        const style = {
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        }
        return(
            <div className="container" >
               <div className="speciesMain" style={style} >
                    
               </div>
            </div>
        )
    }
}

export default Species;