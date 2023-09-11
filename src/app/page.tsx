'use client'
import { trpc } from '~/lib/api'
import styles from './page.module.css'

export default function Home() {
  const { data: todos, isFetching, isLoading } = trpc.findTodos.useQuery()
  console.log(todos, isFetching, isLoading)

  const { data: todo } = trpc.findTodoById.useQuery({ id: 1 })
  return (
    <main className={styles.main}>
      <div>
        <ul>
          {todos?.map(todo => (
            <li key={todo.id} className={todo?.done ? styles.done : ''}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={todo?.done ? styles.done : ''}>{todo?.title}</ul>
      </div>
    </main>
  )
}
