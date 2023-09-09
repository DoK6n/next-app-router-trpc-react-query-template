import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { NextRequest } from 'next/server'
import { type AppRouter, appRouter } from '~/server/main'
import { createTRPCContext } from '~/server/trpc'

const handler = (req: NextRequest) => {
  return fetchRequestHandler<AppRouter>({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createTRPCContext,
  })
}

export { handler as GET, handler as POST }
