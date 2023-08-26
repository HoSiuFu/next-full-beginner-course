"use client"

import TodoProps from "./type"
import Link from "next/link"
import Image from "next/image"

const TodoItem = (props: TodoProps) => {
    return <li className="todo-item">
        <input id={props.id} 
        type="checkbox" 
        className="checkbox"
        defaultChecked={props.complete} 
        onChange={(event) => props.updateTodo({id: props.id, title: props.title, complete: event.target.checked})}/>
        <label htmlFor={props.id} className="label">
            {props.title}
        </label>
        <Link href={`/todo/update/${props.id}`} className="p icon" ><Image src="/pen-to-square-solid.svg" width={12} height={12} alt="Edit" /></Link>
    </li>
}

export default TodoItem