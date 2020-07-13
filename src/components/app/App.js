import React from 'react';
import Header from "../header";
import Footer from "../footer";
import MainContent from "../mainContent";

import '../../cssVariables/variables.css'
import './App.css';

import {
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";


import News from "../News";
import Photos from "../Photos";
import Friends from "../Friends";
import Profile from "../Profile";
import Messages from "../Messages";
import Communities from "../Communities";
import m from '../mainContent/mainContent.module.css'
import Navbar from "../mainContent/navbar";
import RightBar from "../mainContent/rightBar";
import Content from "../mainContent/content/Content";


const App = props => {
    return (
        <Router>
            <div className="App">
                <Header />

                {/*<MainContent state={props.state.postData} />*/}
                <div className={ m.wrap }>
                    <Navbar/>
                <Switch>
                    <Route path='/profile' component={Profile} />
                        {/*<Profile/>*/}
                    {/*</Route>*/}
                    <Route path='/news' component={News} />
                        {/*<News/>*/}
                    {/*</Route>*/}
                    <Route path='/messages' component={Messages} />
                        {/*<Messages/>*/}
                    {/*</Route>*/}
                    <Route path='/friends' component={Friends} />
                        {/*<Friends/>*/}
                    {/*</Route>*/}
                    <Route path='/photos' component={Photos} />
                        {/*<Photos/>*/}
                    {/*</Route>*/}
                    <Route path='/communities' component={Communities}/>
                        {/*<Communities/>*/}
                    {/*</Route>*/}
                </Switch>
                {/*    <Content render={() => props.state.postData} />*/}

                </div>
                {/*<RightBar/>*/}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
