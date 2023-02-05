import React from 'react'
import { auth } from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Logout from './Logout'

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4 rounded-xl`,
    heading: `text-sky-600 text-2xl rounded`,
}

const Navbar = () => {
    const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Holm Chat</h1>
        {user ? <Logout/> : <Signin/>}
    </div>
  )
}

export default Navbar