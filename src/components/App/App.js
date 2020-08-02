import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

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
import m from '../MainContent/mainContent.module.css'
import Navbar from "../MainContent/Navbar";
import RightBar from "../MainContent/RightBar";


const App = props => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <section className={m.wrap}>
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
                </section>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
