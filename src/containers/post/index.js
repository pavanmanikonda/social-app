import React, { useState, useContext}from 'react';
import "./style.css";

import { UserContext } from "../../contexts/user";
import { db, storage } from '../../firebase';


import {  Comment } from "../../components";

export default function Post({
    profileUrl, 
    username, 
    id, 
    photoURL, 
    caption, 
    comments
}) {
    
    const [user, setUser] = useContext(UserContext).user;

    const deletePost = () => {
        // delete the image from firebase storage

        var imageRef = storage.refFromURL(photoURL);

        // delete the file
        imageRef.delete ().then(function(){
            console.log("deleted successfully");
        }).catch(function(error){
            console.log(`Error ${error}`);
        })
        
        //Delete the post info from firebase
        db.collection("posts")
        .doc(id)
        .delete()
        .then(function () {
            console.log("delete post info successfully");
        })
        .catch(function (error) {
            console.log('error post info delete ${error}');
        })
    }

    return (
        <div className="post">
            <div className="post_header">
                <div className="post_headerLeft">
                <img className="post_profilePic" src={profileUrl} />
                <p style={{ marginLeft:" 8px " }}>{username}</p>
                </div>
                <button onClick={deletePost} className="post_delete">
                    Delete
                </button>
            </div>
            <div className="post_center">
                <img className="post_photoUrl"src={photoURL} />
            </div>
            <div>
                <p>
                    <span style={{ fontWeight : "600", marginRight: "4px" }}>
                        {username}
                    </span>
                    {caption}
                </p>
            </div>

            {comments ? comments.map((comment) => 
            <Comment username={comment.username} 
            caption={comment.comment} />
            ): (
            <div>
            </div>
            )}
        </div>
    );
}
