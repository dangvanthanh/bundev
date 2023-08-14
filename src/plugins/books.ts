import { Elysia } from 'elysia';
import { BooksDatabase } from '../db';
import { BookDTO } from '../models';

export const books = new Elysia()
  .decorate('db', new BooksDatabase())
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
      body: BookDTO,
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
      body: BookDTO,
    },
  )
  .delete('/books/:id', ({ db, params }) => {
    try {
      db.deleteBook(parseInt(params.id));
      return { success: true };
    } catch (_) {
      return { success: false };
    }
  });
