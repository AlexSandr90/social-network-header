import React from "react";
import Post from "./post";
import p from './posts.module.css';
import state from "../../../../localData";

import {
    Link,
    BrowserRouter as Router, NavLink,
} from "react-router-dom";

const Posts = () => {

    const { posts } = p;
    const postItem = state.postData.posts.map(item => <Post picture={item.picture} message={item.message} />);

    return (
        <Router>
            <div className={posts}>
                <NavLink to='/post'>
                    {postItem}
                </NavLink>
            </div>
        </Router>
    )
};

export default Posts;
