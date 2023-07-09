import { Elysia, t } from 'elysia';
import { cors } from '@elysiajs/cors';

const app = new Elysia();

app
  .use(cors())
  .get('/id/:id', ({ params: { id } }) => id)
  .listen(8080);

export type App = typeof app;
