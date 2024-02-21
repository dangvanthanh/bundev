import cors from '@elysiajs/cors'
import staticPlugin from '@elysiajs/static'
import { Elysia } from 'elysia'
import { home, news, products, styledSystem, tasks } from './plugins'

const port = process.env.PORT || 3000

const app = new Elysia()
  .use(cors())
  .use(staticPlugin())
  .use(styledSystem)
  .use(home)
  .use(news)
  .use(products)
  .use(tasks)
  .listen(port)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

export type App = typeof app
