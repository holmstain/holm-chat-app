import React from 'react'
import { auth } from '../firebase'

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100 cursor-pointer`
}

const Logout = () => {
const signOut = () => {
    signOut(auth)
}
    return (
    <div className={style.button} onClick={() => auth.signOut()}>
        Logout
    </div>
  )
}

export default Logout