import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';

const page = `<!DOCTYPE HTML>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Books Store</title>
      <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio"></script>
      <link rel="stylesheet" href="/public/assets/css/app.css" />
    </head>
    <body>
        <div class="py-16 mx-auto max-w-4xl px-8 sm:py-24 sm:px-8">
          <a href="/" class="block mb-2 text-gray-500 font-semibold">/</a>
          <h1 x-data="{ text: 'Books Store' }" class="text-3xl leading-tight font-semibold">
            <span x-text="text"></span>
          </h1>
        </div>
        <script src="//unpkg.com/alpinejs" defer></script>
        <script src="/public/assets/js/app.js"></script>
    </body>
</html>`;

export const web = new Elysia()
  .use(html())
  .get('/', () => Bun.file('public/index.html').text())
  .get('/htmx', () => page);
