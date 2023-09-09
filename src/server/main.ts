import { todoRouter } from './routers/todo'
import { mergeRouters } from './trpc'

export const appRouter = mergeRouters(todoRouter)

export type AppRouter = typeof appRouter
