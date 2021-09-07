import React from "react";
import Myposts from "./Myposts/Myposts";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <Myposts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
