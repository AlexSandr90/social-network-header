import React from 'react';
import Header from "../header";
import Footer from "../footer";

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


const App = props => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className={m.wrap}>
                    <Navbar/>
                    <Switch>
                        <Route path='/profile'>
                            <Profile render={() => props.state.profileData}/>
                        </Route>
                        <Route path='/news'>
                            <News render={() => props.state.postData}/>
                        </Route>
                        <Route path='/messages'>
                            <Messages render={() => props.state.dialogsData}/>
                        </Route>
                        <Route path='/friends' component={Friends}/>
                        <Route path='/photos' component={Photos}/>
                        <Route path='/communities' component={Communities}/>
                    </Switch>
                    <RightBar/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
