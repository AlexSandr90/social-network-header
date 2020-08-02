import React from "react";

import p from './post.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSmile,
    faHeart,
    faShare,
    faComments,
} from "@fortawesome/free-solid-svg-icons";


const Post = props => {

    const {
        postImg,
        postItem,
        postText,
        postTitle,
        socialBlock,
        postImgBlock,
        postTextBlock,
        socialBlockItem,
        socialBlockItemText,
        socialBlockItemIcon,
        socialBlockItemLong,
    } = p;

    return (
        <>
            <div className={ postItem }>
                <div className={ postImgBlock }>
                    <img
                        className={ postImg }
                        src={props.picture}
                        alt="post-img"
                    />
                </div>
                <div className={ postTextBlock }>
                    <h3 className={ postTitle }>Post Title</h3>
                    <ul className={ socialBlock }>
                        <li className={ socialBlockItem }>
                            <FontAwesomeIcon
                                icon={ faHeart }
                                className={socialBlockItemIcon}
                            />
                            <span className={ socialBlockItemText }>
                            like
                        </span>
                        </li>
                        <li className={ socialBlockItemLong }>
                            <FontAwesomeIcon
                                icon={ faComments }
                                className={socialBlockItemIcon}
                            />
                            <span className={ socialBlockItemText }>
                            comments
                        </span>
                        </li>
                        <li className={ socialBlockItem }>
                            <FontAwesomeIcon
                                icon={ faShare }
                                className={ socialBlockItemIcon }
                            />
                            <span className={ socialBlockItemText}>
                            share
                        </span>
                        </li>
                        <li className={ socialBlockItem }>
                            <FontAwesomeIcon
                                icon={ faSmile }
                                className={ socialBlockItemIcon }
                            />
                            <span className={ socialBlockItemText }>
                            smile
                        </span>
                        </li>
                    </ul>
                    <p className={ postText }>
                        {props.message}
                    </p>
                </div>
            </div>
        </>
    )
};

export default Post;
