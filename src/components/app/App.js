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


const App = props => {
    return (
        <Router>
            <div className="App">
                <Header />
                <MainContent state={props.state.postData} />
                {/*<div>*/}
                {/*    <Route path='/profile' component={Profile}/>*/}
                {/*    <Route path='/news' component={News}/>*/}
                {/*    <Route path='/messages' component={Messages}/>*/}
                {/*    <Route path='/friends' component={Friends}/>*/}
                {/*    <Route path='/photos' component={Photos}/>*/}
                {/*    <Route path='/communities' component={Communities}/>*/}
                {/*</div>*/}
                <Switch>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                    <Route path='/news'>
                        <News/>
                    </Route>
                    <Route path='/messages'>
                        <Messages/>
                    </Route>
                    <Route path='/friends'>
                        <Friends/>
                    </Route>
                    <Route path='/photos'>
                        <Photos/>
                    </Route>
                    <Route path='/communities'>
                        <Communities/>
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
