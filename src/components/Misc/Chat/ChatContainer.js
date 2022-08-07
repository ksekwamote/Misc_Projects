import React, { useEffect, useState } from 'react'
import ChatboxReciever, { ChatboxSender } from './Chatbox'
import InputText from './InputText'
import socketIOClient from "socket.io-client";
import UserModal from './UserModal';


export default function ChatContainer() {
  let socketio = socketIOClient('http://localhost:5000')
  const [chats , setChats] = useState([])
const [user , setUser] = useState('')

useEffect(()=> {
 
  socketio.on('chat', senderChats => {
    
    // if(senderChats.length > chats.length){
    //   setChats(senderChats)
    // }
    // setChats([...chats ,senderChats.pop()])
    setChats(senderChats)
  })

})


function sendChatToSocket(chat){
  socketio.emit("chat",chat)
}

function addMessage(chat){
    const newChat ={...chat ,user , avatar:"https://joeschmoe.io/api/v1/random"}
    setChats([...chats , newChat])
    sendChatToSocket([...chats , newChat])
}

function OrderChats(){
 return chats.map((chat,index) => {
    if(chat.user===user)return <ChatboxSender key={index} message={chat.message} avatar={chat.avatar}  />
       return <ChatboxReciever key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
  }) 
}

  return (
    <div>{
        user ? 
        <div> 
        <h4>Username: {user}</h4>
            <OrderChats/>
            <InputText addMessage={addMessage} />
        </div> 
        :
        <UserModal setUser={setUser} />
      }
    </div>
  )
}
