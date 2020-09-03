import React from 'react'
import './css/Login.css'
import { Button } from '@material-ui/core'

import {auth, provider } from '../firebase/firebase'
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

function Login() {

    const[state, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) =>{
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png" alt="" />
                <h1> Sign in to the Slack Clone</h1>
                <Button onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
