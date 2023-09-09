type Todo = {
  id: number
  title: string
  done: boolean
}

const todos: Todo[] = [
  {
    id: 0,
    title: '아침에 등산하기',
    done: false,
  },
  {
    id: 1,
    title: '따릉이로 출퇴근 하기',
    done: false,
  },
]

type FindUniqueQuery<T> = {
  where: Partial<T>
}

class TableClient<T> {
  constructor(private records: T[]) {}

  findMany(): T[] {
    return this.records
  }

  findUnique(query: FindUniqueQuery<T>): T | null {
    const key = Object.keys(query.where)[0] as keyof T
    const value = query.where[key]

    return this.records.find(record => record[key] === value) || null
  }
}

export class DatabaseClient {
  public todo: TableClient<Todo>

  constructor() {
    this.todo = new TableClient<Todo>(todos)
  }
}
