import React from "react";
import Post from "./post";
import p from './posts.module.css';
import state from "../../../../localData";

const Posts = () => {

    const { posts } = p;
    const postItem = state.postData.posts.map(item => <Post picture={item.picture} message={item.message} />);

    return (
        <div className={ posts }>
            {postItem}
        </div>
    )
};

export default Posts;
