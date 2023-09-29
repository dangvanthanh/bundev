import cors from '@elysiajs/cors';
import { html } from '@elysiajs/html';
import staticPlugin from '@elysiajs/static';
import { Elysia } from 'elysia';
import {tasks} from './plugins'

const port = process.env.PORT || 3000;

const app = new Elysia()
  .use(cors())
  .use(staticPlugin())
  .use(html())
  .use(tasks)
  .get('/styles.css', () => Bun.file('./styled-system/styles.css'))
  .get('/reset.css', () => Bun.file('./styled-system/reset.css'))
  .get('/global.css', () => Bun.file('./styled-system/global.css'))
  .get('/tokens/index.css', () => Bun.file('./styled-system/tokens/index.css'))
  .get('/tokens/keyframes.css', () => Bun.file('./styled-system/tokens/keyframes.css'))
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
