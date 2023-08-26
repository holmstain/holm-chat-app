import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import {AiOutlineSend} from 'react-icons/ai'


const style = {
    form:`h-full max-w-screen flex text-xl bottom-0 `,
    input:`absolute w-screen ml-[-2px] text-xl p-2 bg-gray-900 text-white outline-none border-none top-[897px] rounded-b-lg`,
    button: `absolute h-[44px] w-[35px] bg-green-500 end-0 top-[897px] ml-[-10px]`,
    sendIcon: `absolute top-[30%] left-[20%]`
}

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Massage cannot blank')
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
        <button className={style.button} type='submit'><AiOutlineSend className={style.sendIcon}/></button>
    </form>
  )
}

export default SendMessage