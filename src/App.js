import React from 'react'
import Navbar from './components/Navbar'
import { auth } from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'


const style = {
  appContainer: `max-w-screen max-h-screen text-center`,
  sectionContainer: `flex flex-col h-max bg-gray-100 nt-10 shadow-xl border relative rounded-md`
}


function App () {
  const [user] = useAuthState(auth)


  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar/>
        {/* Chat Component */}
        {user ? <Chat/> : null}
      </section>
    </div>
  )
}

export default App