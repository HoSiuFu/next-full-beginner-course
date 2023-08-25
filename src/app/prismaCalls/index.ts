import { prisma } from "@/db"
import { redirect } from "next/navigation";
import { Todo } from "../components/TodoItem/TodoItem/type";

export const getListOfTodos = () => {
    return prisma.todo.findMany();
}

export const createTodo = async (data: FormData) => {
    "use server"

    const title = data.get('title')?.valueOf()

    if (typeof title !== "string") throw Error('No title provided!')

    await prisma.todo.create({data:{title, complete: false}})
    redirect("/")
}

export const updateTodo = async (updatedTodo: Todo) => {
    "use server"

    const updateFeedback = await prisma.todo.update({where: {id: updatedTodo.id}, data: updatedTodo})
}