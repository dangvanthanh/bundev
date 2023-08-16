import Elysia, { t } from 'elysia';

export const bookModel = (app: Elysia) =>
  app.model({
    book: t.Object({
      name: t.String(),
      author: t.String(),
    }),
  });
