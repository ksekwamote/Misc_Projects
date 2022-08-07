import React from 'react'
import TodoItem from './TodoItem.js'

export default function TodoList({deleteItem , itemList , updateItem}) {
   //We're using the buttons to control the appearance of the list and not changing the itemList itself.
    const [list , setList] = React.useState(itemList)
    return (
        <div style={{marginTop:50}}>
            {
                list.map((item,index) => <TodoItem 
                key={index} 
                index={index} 
                item={item} 
                deleteItem={deleteItem} 
                updateItem= {updateItem}

                /> )
                
            }
            <div style={{display:'inline'}} >
            <button onClick={() => setList(itemList) } >All</button>
            <button onClick={() => setList(itemList.filter(td =>td.done))} >Completed</button>
            <button onClick={() => setList(itemList.filter(td => !td.done))} >Uncompleted</button>
            <button onClick={()=> console.log(list)}>Press</button>
        </div>
        </div>
    )
}
