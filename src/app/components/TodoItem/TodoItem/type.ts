export interface Todo {
    id: string
    title: string
    complete: boolean
}

interface TodoProps extends Todo {
    updateTodo: (updatedTodo: Todo) => void
    deleteTodo: (id: string) => void
}

export default TodoProps