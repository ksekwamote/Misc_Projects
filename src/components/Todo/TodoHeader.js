import React, { useState } from 'react'
import { FormOutlined } from '@ant-design/icons'

export default function TodoHeader({addItem}) {
    const [todo , setTodo] = useState('')
    return (
        <div>
            <h3 style={{textAlign: 'center'}}><FormOutlined /> TODO List App</h3>
            <span>
                <input 
                    value={todo}
                    onChange={e => setTodo(e.target.value)} 
                    style={{marginRight:10 , width:200, height:25}} 
                    type='text' 
                    placeholder="Enter a Todo" 
                 >
                </input>  
                <button 
                    style={{width:100 , height:30 , backgroundColor:'skyblue', borderWidth:0 , fontWeight:'bold', color:'#fff'}}
                    onClick={() => {addItem(todo); setTodo('')}}
                >Submit</button>
            </span>
        </div>
    )
}
