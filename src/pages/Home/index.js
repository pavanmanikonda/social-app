import React from 'react'
import "./style.css"
import { Navbar, CreatePost, } from "../../containers";

import Feed from "../../containers/feed"


export default function Home(){
    return(
        <div className="home">
            <Navbar />
            <CreatePost />
            <Feed />
        </div>
    )
}