import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

export const web = new Elysia()
  .use(html())
  .get('/', () => Bun.file('public/index.html').text())
  .get('/app.js', () => Bun.file('public/app.js').text())
  .get('/app.css', () => Bun.file('public/app.css').text());
