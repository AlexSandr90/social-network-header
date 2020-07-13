import React from "react";

import m from './mainContent.module.css'
import Navbar from "./navbar";
import Content from "./content/Content";
import RightBar from "./rightBar";


const MainContent = props => {

    const {
        wrap
    } = m;

    return (
        <div className={ wrap }>
            {/*<Navbar/>*/}
            <Content render={() => props.state.postData} />
            {/*<RightBar/>*/}
        </div>
    )
};

export default MainContent;
