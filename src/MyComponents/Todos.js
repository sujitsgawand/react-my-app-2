import React from 'react'
import {Todo} from "../MyComponents/Todo";
export const Todos = (props) => {
    return (
        <div className="container">
           <h3>Todo's List</h3> 
           <Todo todo = {props.todos[0]}/>
        </div>
    )
}
