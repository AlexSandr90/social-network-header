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
    BrowserRouter as Router
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
                        <Link className={link}
                              to='/profile'
                        >
                            <FontAwesomeIcon icon={faHome} className={icon}/>
                            <span className={itemText}>
                            My Page
                        </span>
                        </Link>
                        {/*<a*/}
                        {/*    className={link}*/}
                        {/*    href="/profile"*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faHome} className={ icon }/>*/}
                        {/*    <span className={ itemText }>*/}
                        {/*        My Page*/}
                        {/*    </span>*/}
                        {/*</a>*/}
                    </li>
                    <li className={item}>
                        <Link to='/news' className={link}>
                            <FontAwesomeIcon icon={faNewspaper} className={icon}/>
                            <span className={itemText}>
                            News
                        </span>
                        </Link>
                        {/*<a*/}
                        {/*    className={link}*/}
                        {/*    href="/news"*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faNewspaper} className={ icon }/>*/}
                        {/*    <span className={ itemText }>*/}
                        {/*        News*/}
                        {/*    </span>*/}
                        {/*</a>*/}
                    </li>
                    <li className={item}>
                        <Link to='/messages' className={link} >
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={icon}/>
                            <span className={itemText}>
                                Messages
                            </span>
                        </Link>
                        {/*<a*/}
                        {/*    className={link}*/}
                        {/*    href="/messages"*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faEnvelopeOpenText} className={icon}/>*/}
                        {/*    <span className={itemText}>*/}
                        {/*        Messages*/}
                        {/*    </span>*/}
                        {/*</a>*/}
                    </li>
                    <li className={item}>
                        <Link to='/friends' className={link}>
                            <FontAwesomeIcon icon={faUserFriends} className={icon}/>
                            <span className={itemText}>
                                Friends
                            </span>
                        </Link>
                        {/*<a*/}
                        {/*    className={link}*/}
                        {/*    href="/friends"*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faUserFriends} className={icon}/>*/}
                        {/*    <span className={itemText}>*/}
                        {/*    Friends*/}
                        {/*</span>*/}
                        {/*</a>*/}
                    </li>
                    <li className={item}>
                        <Link to='/photos' className={link}>
                            <FontAwesomeIcon icon={faCamera} className={icon}/>
                            <span className={itemText}>
                                Photos
                            </span>
                        </Link>
                        {/*<a*/}
                        {/*    className={link}*/}
                        {/*    href="/photos"*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faCamera} className={icon}/>*/}
                        {/*    <span className={itemText}>*/}
                        {/*        Photos*/}
                        {/*    </span>*/}
                        {/*</a>*/}
                    </li>
                    <li className={item}>
                        <Link to='/communities' className={link}>
                            <FontAwesomeIcon icon={faUsers} className={icon}/>
                            <span className={itemText}>
                                Communities
                            </span>
                        </Link>
                        {/*<a*/}
                        {/*    className={link}*/}
                        {/*    href="/communities"*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faUsers} className={icon}/>*/}
                        {/*    <span className={itemText}>*/}
                        {/*    Communities*/}
                        {/*</span>*/}
                        {/*</a>*/}
                    </li>
                </ul>
            </Router>
        </aside>
    )
};

export default Navbar;
