import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import App from "./App.js"
import cs from "./css/style.css"
import "./fonts/static/Montserrat-Bold.ttf"

const app = ReactDOMClient.createRoot(document.getElementById("main"))
app.render(<App />)