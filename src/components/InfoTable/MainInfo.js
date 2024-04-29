import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client'
import Contact from "../Contact"
import Advertising from './Advertising';
import Slider from '../Slider';

import Search from './search';

function MainInfo() {
    return (
        <div>
            <Contact  />
            <Search />
            <Slider />
            <Advertising />
        </div>
    )
}

export default MainInfo