import React from "react";

import n from './news.module.scss';
import Posts from "../MainContent/content/posts";

const News = props => {
    const {content} = n;
    return (
        <section className={ content } >
            <Posts render={() => props.state.postData} />
        </section>
    )
};

export default News;
