import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCompass} from "@fortawesome/free-solid-svg-icons/faCompass";


import h from './header.module.css';

const Header = () => {

    const {
        logo,
        header,
        logoText,
        logoBlock,
        topMenuBlock,
    } = h;

    return (
        <header className={ header }>
            <div className={ logoBlock } >
                <a href="/" className={logo}>
                    <FontAwesomeIcon icon={faCompass}/>
                    <span className={logoText}>Logo</span>
                </a>
            </div>

            <div className={topMenuBlock}>

            </div>
        </header>
    )
};

export default Header;