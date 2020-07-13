import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUsers,
    faCamera,
    faNewspaper,
    faUserFriends,
    faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import n from './navbar.module.css';
import Profile from "../../Profile";
import News from "../../News";
import Messages from "../../Messages";
import Friends from "../../Friends";
import Photos from "../../Photos";
import Communities from "../../Communities";

const Navbar = () => {

    const {
        link,
        item,
        icon,
        items,
        navbar,
        itemText,
    } = n;

    return (
        <aside className={navbar}>
            <Router>
                <ul className={items}>
                    <li className={item}>
                        <Link className={link}
                              to='/profile'
                        >
                            <FontAwesomeIcon icon={faHome} className={icon}/>
                            <span className={itemText}>
                            My Page
                        </span>
                        </Link>
                    </li>
                    <li className={item}>
                        <Link to='/news' className={link}>
                            <FontAwesomeIcon icon={faNewspaper} className={icon}/>
                            <span className={itemText}>
                            News
                        </span>
                        </Link>
                    </li>
                    <li className={item}>
                        <Link to='/messages' className={link} >
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={icon}/>
                            <span className={itemText}>
                                Messages
                            </span>
                        </Link>
                    </li>
                    <li className={item}>
                        <Link to='/friends' className={link}>
                            <FontAwesomeIcon icon={faUserFriends} className={icon}/>
                            <span className={itemText}>
                                Friends
                            </span>
                        </Link>
                    </li>
                    <li className={item}>
                        <Link to='/photos' className={link}>
                            <FontAwesomeIcon icon={faCamera} className={icon}/>
                            <span className={itemText}>
                                Photos
                            </span>
                        </Link>
                    </li>
                    <li className={item}>
                        <Link to='/communities' className={link}>
                            <FontAwesomeIcon icon={faUsers} className={icon}/>
                            <span className={itemText}>
                                Communities
                            </span>
                        </Link>
                    </li>
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
                </ul>
            </Router>
        </aside>
    )
};

export default Navbar;
