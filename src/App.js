import React, { useState } from "react";
import "./App.css"
import Login from "./components/Login/Login";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/Login/Home";
import TodoApp from "./components/Misc/Todo/TodoApp";


function App() {
  

  return (
  // <BrowserRouter>
  //   <Routes>
  //       <Route path="/" element={<Login/>} />
  //       <Route path="/home" element={<Home/>} />
  //   </Routes>
  // </BrowserRouter>
  <div>
    <TodoApp/>
  </div>
   
  );
}

export default App;
