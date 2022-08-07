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

    function updateItem(newItem){
        console.log(newItem)

        setItemList(itemList.map(item => {
            if(item.title == newItem.title){ //use ID
                return newItem
            }
            return item
        }))

    }

    function addItem(title){
       setItemList([...itemList , {title  , done:false}]) //use uuid
    }

    return (
        <div style={{ display:'flex', justifyContent:'center' , alignItems:'center' }}>
            <div>
                <TodoHeader addItem={addItem} />
                <TodoList updateItem={updateItem} deleteItem={deleteItem} itemList={itemList} /> 
                <button onClick={() => console.log(itemList)} >Press Me</button>
            </div> 
        </div>
    )
}
