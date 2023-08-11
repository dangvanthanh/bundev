import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';

const app = new Elysia();

app
  .use(cors())
  .get('/', () => 'Hello Elysia')
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;