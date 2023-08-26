import { prisma } from "@/db"
import Link from "next/link"
import { getListOfTodos, updateTodo } from "./actions/prisma"
import { TodoItem } from "./components/TodoItem";

const Home = async () => {
  const listOfTodos = await getListOfTodos();
  
  return <>
    <header className="header">
      <h1 className="h1">Todos</h1>
      <Link href="/todo/create" className="p new">New</Link>
    </header>
    <ul className="list">
      {listOfTodos.map((todo) => <TodoItem updateTodo={updateTodo} key={todo.id} {...todo}/>)}
    </ul>
  </>
}

export default Home