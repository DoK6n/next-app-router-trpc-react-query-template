import { DatabaseClient } from './db'
import { initTRPC } from '@trpc/server'
import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

const createInnerTRPCContext = () => {
  return {
    db: new DatabaseClient(),
  }
}

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  const { req } = opts
  return createInnerTRPCContext()
}

const t = initTRPC.context<typeof createTRPCContext>().create({})

export const router = t.router
export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
