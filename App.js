import React from "react";
import {createRoot} from "react-dom/client";

import Slider from "./publick/swiper";

import FirstPage from "./publick/modules/FirstPage"


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="center-wrapper">
            <Slider></Slider>
            <div className="main__container">
                <FirstPage/>
            </div>
        </div>)
        
    }
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>)