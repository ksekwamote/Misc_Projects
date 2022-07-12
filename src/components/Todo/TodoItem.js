import { DeleteFilled } from '@ant-design/icons'
import React, { useState } from 'react'




export default function TodoItem({item, deleteItem , index}) {

    const [strikethrough , setStrikethrough] = useState(item.done)

    const styles = {
        container: {  
                border: '1px solid #000' ,
                display:"flex" ,
                flexDirection:'row' ,
                justifyContent:"space-between" , 
                alignItems:'center', 
                paddingInline:10
         },
         checkbox: {
                marginRight:20 
         },
         text: {
            textDecoration: strikethrough && 'line-through'
         }
        }
    
    return (
        <div style={styles.container}>
            <p style={styles.text}>{item.title}</p>
            <span>
                <input 
                    //value={strikethrough} 
                    onChange={() => setStrikethrough(!strikethrough)} 
                    style={styles.checkbox} 
                    type="checkbox"
                    checked={strikethrough}
                 >
                </input>
                <DeleteFilled onClick={()=> deleteItem(index)} />
            </span> 
        </div>
    )
}
