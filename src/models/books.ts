import { t } from 'elysia';

export const BookDTO = t.Object({
  name: t.String(),
  author: t.String(),
});
