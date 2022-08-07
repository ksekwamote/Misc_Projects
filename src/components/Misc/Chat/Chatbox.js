import { Avatar , Image } from 'antd'
import React from 'react'


export default function ChatboxReciever({user, message , avatar}) {
  return (
    <div style={{  display:'flex' ,justifyContent:'flex-start' , flexDirection:'row'}}>
         <Avatar
          size={50}
         src={
        <Image
        src={avatar}
        style={{
         objectFit:'cover',
         width:45,
         height:45 , borderRadius:'100%'
        }}
        preview={false}
      />
      }
    />
        <p style={{padding:10 , backgroundColor:'#dcf8c6' , borderRadius:10, maxWidth:'60%'}}>
                <strong style={{fontSize:13}} >{user}</strong> <br></br>
                {message}
        </p>
    </div>
  )
}
export function ChatboxSender({message,avatar}) {
  return (
    <div style={{ display:'flex', justifyContent:'flex-end', flexDirection:'row' }}>
        <p style={{padding:10 , backgroundColor:'#fff' , borderRadius:10, maxWidth:'60%'}}>
                {message}
        </p>
        <Avatar
          style={{ marginLeft:5 ,  }}
          size={50}
         src={
        <Image
        src={avatar}
        style={{
         objectFit:'cover',
         width:45,
         height:45 , borderRadius:'100%'
        }}
        preview={false}
      />
      }
    />
    </div>
  )
}
