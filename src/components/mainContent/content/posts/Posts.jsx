import React from "react";
import Post from "./post";
import p from './posts.module.css';
import state from "../../../../localData";

import {BrowserRouter as Router} from "react-router-dom";

const Posts = () => {

    const { posts } = p;
    const postItem = state.postData.posts.map(item => <Post picture={item.picture} message={item.message} />);

    return (
        <Router>
            <div className={posts}>
                <a href='/post'>
                    {postItem}
                </a>
            </div>
        </Router>
    )
};

export default Posts;
