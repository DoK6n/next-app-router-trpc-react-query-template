import { DatabaseClient } from './db'
import { initTRPC } from '@trpc/server'
import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
// import SuperJSON from 'superjson'

const createInnerTRPCContext = () => {
  return {
    db: new DatabaseClient(),
  }
}

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  const { req } = opts
  return createInnerTRPCContext()
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  // transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
      },
    }
  },
})

export const router = t.router
export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
