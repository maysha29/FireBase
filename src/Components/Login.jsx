import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const Login = () => {
  const provider=new  GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        console.log('sign in button clicked');

         signInWithPopup(auth,provider)
         .then(result=>{
            console.log(result);
         })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <h2>please login</h2>
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Login;