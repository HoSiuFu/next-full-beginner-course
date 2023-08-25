"use client"

import TodoProps from "./type"

const TodoItem = (props: TodoProps) => {
    return <li className="todo-item">
        <input id={props.id} 
        type="checkbox" 
        className="checkbox"
        defaultChecked={props.complete} 
        onChange={() => props.updateTodo({id: props.id, title: props.title, complete: !props.complete})}/>
        <label htmlFor={props.id} className="label">
            {props.title}
        </label>
    </li>
}

export default TodoItem