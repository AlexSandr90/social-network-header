import React from "react";
import Posts from "./posts";

import c from './content.module.scss';

const Content = props => {

    const {
        content
    } = c;

    return (
        <section className={ content } >
            <Posts render={() => props.state.postData} />
        </section>
    )
};

export default Content;
