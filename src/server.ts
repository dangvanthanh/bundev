import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import { cors } from '@elysiajs/cors';
import { BooksDatabase } from './db';

const app = new Elysia();

app
  .use(cors())
  .use(html())
  .decorate('db', new BooksDatabase())
  .get('/', () => Bun.file('public/index.html').text())
  .get('/app.js', () => Bun.file('public/app.js').text())
  .get('/app.css', () => Bun.file('public/app.css').text())
  .get('/books', ({ db }) => db.getBooks())
  .post(
    '/books',
    async ({ db, body }) => {
      const id = (await db.addBook(body)).id;
      return {
        success: true,
        id,
      };
    },
    {
      body: t.Object({
        name: t.String(),
        author: t.String(),
      }),
    },
  )
  .put(
    '/books/:id',
    ({ db, params, body }) => {
      try {
        db.updateBook(parseInt(params.id), body);
        return { success: true };
      } catch (_) {
        return { success: false };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        author: t.String(),
      }),
    },
  )
  .delete('/books/:id', ({ db, params }) => {
    try {
      db.deleteBook(parseInt(params.id));
      return { success: true };
    } catch (_) {
      return { success: false };
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
