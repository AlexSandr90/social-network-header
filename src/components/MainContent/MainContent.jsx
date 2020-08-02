import React from "react";

import m from './mainContent.module.css'
import Navbar from "./Navbar";
import Content from "./content/Content";
import RightBar from "./RightBar";
import News from "../News";


const MainContent = props => {

    const {
        wrap
    } = m;

    return (
        <div className={ wrap }>
            {/*<Navbar/>*/}
            <News render={() => props.state.postData} />
            {/*<RightBar/>*/}
        </div>
    )
};

export default MainContent;
