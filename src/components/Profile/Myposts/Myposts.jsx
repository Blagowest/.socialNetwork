import React from "react";
import Post from "../Post/Post";
import style from './Myposts.module.css'

function Myposts(props) {
    let postsData = [
        {id: 0, post: 'йо', likesCount:'00'},
        {id: 1, post: 'Привет', likesCount:'11'},
        {id: 2, post: 'Шалом', likesCount:'22'},
        {id: 3, post: 'Вечер в хату', likesCount:'33'},
        {id: 4, post: 'Здравствуйте', likesCount:'44'}
    ]
    return (
        <div className={style.Myposts}>
            <div><h3>Myposts</h3>
                <div>
                    <div><textarea placeholder="Write something..." className={style.textArea}></textarea></div>
                    <div>
                        <button className={style.button}><span>Add post</span></button>
                    </div>
                </div>
                <Post message={postsData[0].post} id={postsData[0].id} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].post} id={postsData[1].id} likesCount={postsData[1].likesCount} />
                <Post message={postsData[2].post} id={postsData[2].id} likesCount={postsData[2].likesCount} />
                <Post message={postsData[3].post} id={postsData[3].id} likesCount={postsData[3].likesCount} />
                <Post message={postsData[4].post} id={postsData[4].id} likesCount={postsData[4].likesCount} />

            </div>
        </div>
    );
}

export default Myposts;
