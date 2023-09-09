import { router, publicProcedure } from '~/server/trpc'

export const todoRouter = router({
  findTodos: publicProcedure.query(async ({ ctx }) => {
    console.log('[todo] - GET findTodos')
    return ctx.db.todo.findMany()
  }),
  findTodoById: publicProcedure.query(async ({ ctx }) => {
    console.log('[todo] - GET findTodoById')
    return ctx.db.todo.findUnique({
      where: {
        id: 0,
      },
    })
  }),
})
