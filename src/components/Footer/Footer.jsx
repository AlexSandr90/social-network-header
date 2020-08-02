import React from "react";

import f from './footer.module.css';

const Footer = () => {

    const {
        footer,
        footerText,
    } = f;

    return (
        <footer className={ footer }>
            <p className={ footerText }>
                Developed by We Are The Future.
            </p>
        </footer>
    )
};

export default Footer;