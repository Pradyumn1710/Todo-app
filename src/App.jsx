import { useState } from 'react'
// import './App.css'
import {Createtodo} from './components/Createtodo'
import {Todos} from "./components/Todo.jsx"

function App() {
  const [todos,setTodos]=useState([])
  fetch ("http://localhost:3000/todos").then (async function (res) {
const json = await res. json();
setTodos (json. todos);
})
  return  <div>
    <h1>hii there</h1>
    <Createtodo></Createtodo>
    <Todos todos={todos}></Todos>
  </div>
}

export default App
