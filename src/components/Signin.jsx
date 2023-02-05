import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const style = {
    wrapper: `flex justify-center`,
}

const googleSingIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSingIn}/>
    </div>
  )
}

export default Signin