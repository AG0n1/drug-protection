import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client'
import Information from "./Information"
import Information2 from "./Information2"
import Contact from "../Contact"
import Advertising from './Advertising';

import Search from './search';

function MainInfo() {
    return (
        <div>
            <Contact  />
            <Search />
            <Advertising />
            
        </div>
    )
}

export default MainInfo