import React, { useContext, useState } from 'react'
import "./style.css"
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';


export default function SignInBtn(){
const [user, setUser] = useContext
(UserContext).user;

    const SignInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle()
        if(userBySignIn) setUser(userBySignIn);
    };
    return(
        <div className="SignInBtn" onClick={SignInBtnClick}>
            <p>
                Sign in with Google
            </p>
        </div>
    )
}