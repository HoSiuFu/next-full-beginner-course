"use client"

import TodoProps from "./type"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const TodoItem = (props: TodoProps) => {
    const [deleted, setDeleted] = useState(false);

    return <li className={`todo-item ${deleted ? "deleted": ""}`}>
        <input id={props.id} 
        type="checkbox" 
        className="checkbox"
        defaultChecked={props.complete} 
        onChange={(event) => props.updateTodo({id: props.id, title: props.title, complete: event.target.checked})}/>
        <label htmlFor={props.id} className="label">
            {props.title}
        </label>
        <Link href={`/todo/update/${props.id}`} className="p icon" ><Image src="/pen-to-square-solid.svg" width={12} height={12} alt="Edit" /></Link>
        <Image className="p icon" src="/circle-xmark-regular.svg" width={12} height={12} alt="Delete" onClick={() => {
            setDeleted(true)
            props.deleteTodo(props.id)
        }} />
    </li>
}

export default TodoItem