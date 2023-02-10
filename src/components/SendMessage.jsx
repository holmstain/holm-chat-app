import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import {AiOutlineSend} from 'react-icons/ai'


const style = {
    form:`h-10 w-full max-w-screen flex text-xl bottom-0`,
    input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20px] bg-green-500 bottom-0`,
}

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('write something')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name:displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    
    return (
        <form onSubmit={sendMessage} className={style.form}>
        <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='message' />
        <button className={style.button} type='submit'><AiOutlineSend/></button>
    </form>
  )
}

export default SendMessage