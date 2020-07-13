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
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";

import n from './navbar.module.css';
import Profile from "../../Profile";
import News from "../../News";
import Messages from "../../Messages";
import Friends from "../../Friends";
import Photos from "../../Photos";
import Communities from "../../Communities";

const routes = [
    {
        path: '/profile',
        exact: true,
        sidebar: null,
        main: () => <Profile/>
    },
    {
        path: '/news',
        exact: true,
        sidebar: null,
        main: () => <News/>
    },
    {
        path: '/messages',
        exact: true,
        sidebar: null,
        main: () => <Messages/>
    },
    {
        path: '/friends',
        exact: true,
        sidebar: null,
        main: () => <Friends/>
    },
    {
        path: '/photos',
        exact: true,
        sidebar: null,
        main: () => <Photos/>
    },
    {
        path: '/communities',
        exact: true,
        sidebar: null,
        main: () => <Communities/>
    },
];

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
                        <Link className={link} to='/profile' >
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
                </ul>
            </Router>
        </aside>
    )
};

export default Navbar;
