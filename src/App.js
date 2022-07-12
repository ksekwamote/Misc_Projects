import React from "react";
import "./App.css"
import ChatboxReciever, { ChatboxSender } from "./components/Chat/Chatbox";
import InputText from "./components/Chat/InputText";



function App() {

  return (
    <div style={{ width:"1000px", height:'1000px', backgroundColor:"whitesmoke" , padding:10}} >
      <ChatboxReciever/>
      <ChatboxSender/>
      <ChatboxReciever/>
      <ChatboxSender/>
      <InputText/>
    </div>
   
  );
}

export default App;
