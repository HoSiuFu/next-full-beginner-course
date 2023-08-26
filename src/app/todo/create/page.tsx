import Link from "next/link"
import { createTodo } from "@/app/actions/prisma"

const Create = () => {
    return <> 
        <h1 className="h1">Create New Todo</h1>
        <form action={createTodo} className="form">
            <input className="p input" type="text" name="title" />
            <div className="button-div">
                <button className="p button">Create</button>
                <Link href="/" className="p button">Cancel</Link>
            </div>
        </form>
    </>
}

export default Create