import React from "react";
import Post from "../Post/Post";
import style from './Myposts.module.css'



const Myposts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} id={p.id} likesCount={p.likesCount}/>);

    let newPosrElement = React.createRef();

    let addPost = () => {
        let text = newPosrElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={style.Myposts}>
            <div><h3>Myposts</h3>
                <div>
                    <div><textarea ref={newPosrElement} placeholder="Write something..." className={style.textArea}></textarea></div>
                    <div>
                        <button onClick={ addPost } className={style.button}><span>Add post</span></button>
                    </div>
                </div>
                {postsElements}
            </div>
        </div>
    );

}

export default Myposts;
