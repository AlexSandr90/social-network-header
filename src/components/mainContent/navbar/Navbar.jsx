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
    NavLink,
    BrowserRouter as Router,
} from "react-router-dom";

import n from './navbar.module.css';

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
                        <NavLink to='/profile' className={link}>
                            <FontAwesomeIcon icon={faHome} className={icon}/>
                            <span className={itemText}>
                                My Page
                            </span>
                        </NavLink>`
                    </li>
                    <li className={item}>
                        <a href='/news' className={link}>
                            <FontAwesomeIcon icon={faNewspaper} className={icon}/>
                            <span className={itemText}>
                                News
                            </span>
                        </a>
                    </li>
                    <li className={item}>
                        <NavLink to='/messages' className={link} >
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={icon}/>
                            <span className={itemText}>
                                Messages
                            </span>
                        </NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/friends' className={link}>
                            <FontAwesomeIcon icon={faUserFriends} className={icon}/>
                            <span className={itemText}>
                                Friends
                            </span>
                        </NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/photos' className={link}>
                            <FontAwesomeIcon icon={faCamera} className={icon}/>
                            <span className={itemText}>
                                Photos
                            </span>
                        </NavLink>
                    </li>
                    <li className={item}>
                        <NavLink to='/communities' className={link}>
                            <FontAwesomeIcon icon={faUsers} className={icon}/>
                            <span className={itemText}>
                                Communities
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </Router>
        </aside>
    )
};

export default Navbar;
