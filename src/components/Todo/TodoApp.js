import React, { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'


export default function TodoApp() {
    const [itemList , setItemList]=  useState([
        {
            title: "Take a Shower",
            done: false
        },
        {
            title: "Grab a cup of Coffee",
            done: true
        },
        {
            title: "Shower please",
            done: true
        }
    ])

    function deleteItem(index){
       setItemList([...itemList.slice(0,index) ,...itemList.slice(index+1,itemList.length)])
    }

    function addItem(title){
       setItemList([...itemList , {title  , done:false}])
    }

    return (
        <div style={{ display:'flex', justifyContent:'center' , alignItems:'center' }}>
            <div>
                <TodoHeader addItem={addItem} />
                <TodoList deleteItem={deleteItem} itemList={itemList} /> 
            </div> 
        </div>
    )
}
