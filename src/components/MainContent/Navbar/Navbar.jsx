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
import {NavLink} from "react-router-dom";
import n from './navbar.module.css';

const Navbar = () => {

    const {
        link,
        item,
        icon,
        items,
        navbar,
        active,
        itemText,
    } = n;

    return (
        <aside className={navbar}>

                <ul className={items}>

                    <li className={item} >
                        <NavLink exact to='/profile' className={`${link}`} activeClassName={`${link} ${active}`} key={1}>
                            <FontAwesomeIcon icon={faHome} className={icon}/>
                            <span className={itemText}>
                                My Page
                            </span>
                        </NavLink>
                    </li>

                    <li className={item} >
                        <NavLink exact to='/news' className={link} activeClassName={`${link} ${active}`} key={2}>
                            <FontAwesomeIcon icon={faNewspaper} className={icon}/>
                            <span className={itemText}>
                                News
                            </span>
                        </NavLink>
                    </li>

                    <li className={item} >
                        <NavLink exact to='/messages' className={link} activeClassName={`${link} ${active}`} key={3}>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={icon}/>
                            <span className={itemText}>
                                Messages
                            </span>
                        </NavLink>
                    </li>

                    <li className={item} >
                        <NavLink exact to='/friends' className={link} activeClassName={`${link} ${active}`} key={4}>
                            <FontAwesomeIcon icon={faUserFriends} className={icon}/>
                            <span className={itemText}>
                                Friends
                            </span>
                        </NavLink>
                    </li>

                    <li className={item}>
                        <NavLink exact to='/photos' className={link} activeClassName={`${link} ${active}`} key={5}>
                            <FontAwesomeIcon icon={faCamera} className={icon}/>
                            <span className={itemText}>
                                Photos
                            </span>
                        </NavLink>
                    </li>

                    <li className={item} >
                        <NavLink to='/communities' className={link} activeClassName={`${link} ${active}`} key={6}>
                            <FontAwesomeIcon icon={faUsers} className={icon}/>
                            <span className={itemText}>
                                Communities
                            </span>
                        </NavLink>
                    </li>

                </ul>

        </aside>
    )
};

export default Navbar;
