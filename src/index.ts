import { cors } from '@elysiajs/cors';
import { staticPlugin } from '@elysiajs/static';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

import { books, web } from './plugins';

const app = new Elysia();

app.use(swagger()).use(cors()).use(staticPlugin()).use(web).use(books).listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
