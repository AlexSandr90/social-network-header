import React from "react";

import m from './mainContent.module.css'
import Navbar from "./navbar";
import Content from "./content/Content";
import RightBar from "./rightBar";
import {
    Switch,
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Profile from "../Profile";
import News from "../News";
import Messages from "../Messages";
import Friends from "../Friends";
import Photos from "../Photos";
import Communities from "../Communities";

const MainContent = props => {

    const {
        wrap
    } = m;

    return (
        <div className={ wrap }>
            <Navbar/>
            {/*<Switch>*/}
            {/*    <Route path='/profile'>*/}
            {/*        <Profile/>*/}
            {/*    </Route>*/}
            {/*    <Route path='/news'>*/}
            {/*        <News/>*/}
            {/*    </Route>*/}
            {/*    <Route path='/messages'>*/}
            {/*        <Messages/>*/}
            {/*    </Route>*/}
            {/*    <Route path='/friends'>*/}
            {/*        <Friends/>*/}
            {/*    </Route>*/}
            {/*    <Route path='/photos'>*/}
            {/*        <Photos/>*/}
            {/*    </Route>*/}
            {/*    <Route path='/communities'>*/}
            {/*        <Communities/>*/}
            {/*    </Route>*/}

            {/*</Switch>*/}
            <Content render={() => props.state.postData} />
            <RightBar/>
        </div>
    )
};

export default MainContent;
