import Link from "next/link"
import { createTodo } from "../prismaCalls"

const New = () => {
    return <div className="new-main"> 
        <h1 className="h1">Create New Todo</h1>
        <form action={createTodo} className="form">
            <input className="p input" type="text" name="title" />
            <div className="button-div">
                <button className="p button">Create</button>
                <Link href=".." className="p button">Cancel</Link>
            </div>
        </form>
    </div>
}

export default New