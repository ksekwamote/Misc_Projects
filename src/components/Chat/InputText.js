import React from 'react'

export default function InputText() {
  return (
    <div style={{display:"flex", justifyContent:'space-evenly', alignItems:'center'}}>
        <textarea
        style={{ width:'60%' , height:50 ,borderRadius:10, borderWidth:0 , padding:10 , fontSize:18}} 
        rows={6}
        placeholder="Write something..." ></textarea>
        <button
        style={{width:'10%' ,height:50 , fontWeight:'bold', borderRadius:10 ,fontSize:18 ,backgroundColor:'#34b7f1',borderWidth:0,color:'#fff'}}
        >Enter</button>
    </div>
  )
}
