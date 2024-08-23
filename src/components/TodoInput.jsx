import { useState } from "react"

export default function TodoInput(props){
    const {todoValue,setTodoValue,handleAddTodos} = props

    return(
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter Value" />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}