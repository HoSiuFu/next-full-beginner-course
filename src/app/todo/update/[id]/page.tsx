import Link from "next/link"
import { getListOfTodos, getTodo, updateTodoForm } from "@/app/actions/prisma"
import { Todo } from "@prisma/client";
import { PageProps } from "../../../../../.next/types/app/layout";
import { notFound } from "next/navigation";

const Update = async (props: PageProps) => {
    const todo = await getTodo(props.params.id);
    
    if (!todo) notFound()

    return <> 
        <h1 className="h1">Update Todo</h1>
        <form action={updateTodoForm} className="form">
            <input type="text" name="id" value={todo.id} hidden />
            <input className="p input" type="text" name="title" defaultValue={todo.title} />
            <div className="button-div">
                <button type="submit" className="p button">Update</button>
                <Link href="/" className="p button">Cancel</Link>
            </div>
        </form>
    </>
}

export default Update