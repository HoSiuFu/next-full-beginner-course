import { prisma } from "@/db"
import { redirect } from "next/navigation";
import { Todo } from "../../components/TodoItem/TodoItem/type";
import { TodoFormData } from "./type";

const extractFormData = (data: FormData): TodoFormData => {
    const title = data.get('title')?.valueOf()

    if (typeof title !== "string") throw Error('No title provided!')

    let id = data.get('id')?.valueOf()

    if (typeof id !== "string") return { title }

    return { id, title }
}

export const getListOfTodos = () => {
    return prisma.todo.findMany();
}

export const getTodo = (id: string) => {
    return prisma.todo.findFirst({where: {id}})
}

export const createTodo = async (data: FormData) => {
    "use server"

    const todoData = extractFormData(data)

    await prisma.todo.create({ data:{ title: todoData.title, complete: false } })

    redirect("/")
}

export const updateTodo = async (updatedTodo: Todo, redirect=false) => {
    "use server"

    const updateFeedback = await prisma.todo.update({ where: { id: updatedTodo.id }, data: updatedTodo })
}

export const updateTodoForm = async (data: FormData) => {
    "use server"

    const todoData = extractFormData(data)

    await prisma.todo.update({ where: {id: todoData.id}, data: {title: todoData.title}})

    redirect("/")
}

export const deleteTodo = async (id: string) => {
    "use server"

    await prisma.todo.delete({ where: {id} })
}   