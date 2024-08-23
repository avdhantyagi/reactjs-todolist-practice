import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState(['Go to the gym',
    'Eat more fruits and veg',
    'Pick up some kids from somewhere'])

  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex) =>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList
    }))
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )

}

export default App
