import React from "react";
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.Post}>
            <div>{props.message}</div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;
