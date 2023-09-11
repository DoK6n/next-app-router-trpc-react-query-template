import { router, publicProcedure } from '~/server/trpc'
import { z } from 'zod'

const inputFindTodoById = z.object({ id: z.number() })
// interface InputFindTodoById extends z.infer<typeof inputFindTodoById> {}

export const todoRouter = router({
  findTodos: publicProcedure.query(async ({ ctx }) => {
    console.log('[todo] - GET findTodos')
    return ctx.db.todo.findMany()
  }),
  findTodoById: publicProcedure.input(inputFindTodoById).query(async ({ input, ctx }) => {
    console.log('[todo] - GET findTodoById', { input })
    return ctx.db.todo.findUnique({
      where: {
        id: input.id,
      },
    })
  }),
})
