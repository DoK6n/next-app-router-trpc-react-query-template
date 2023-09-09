'use client'
import { trpc } from '~/lib/api'
import styles from './page.module.css'

export default function Home() {
  const { data, isFetching, isLoading } = trpc.findTodos.useQuery()
  console.log(data, isFetching, isLoading)
  return (
    <main className={styles.main}>
      <div>
        <ul>
          {data?.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
