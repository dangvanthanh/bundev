import cors from '@elysiajs/cors';
import { html } from '@elysiajs/html';
import staticPlugin from '@elysiajs/static';
import { Elysia } from 'elysia';
import * as elements from 'typed-html';
import { css } from '../styled-system/css';
import { Button } from './components/Button';
import { Chat } from './components/Chat';
import { Layout } from './components/Layout';

const app = new Elysia()
  .use(cors())
  .use(staticPlugin())
  // @ts-expect-error https://github.com/elysiajs/elysia/issues/94
  .use(html())
  // @ts-expect-error
  .get('/', ({ html }) =>
    html(
      <Layout>
        <body
          class={css({
            display: 'flex',
            height: '100vh',
            margin: 0,
            bg: 'gray.100'
          })}
        >
          <Chat />
        </body>
      </Layout>,
    ),
  )
  .post('/clicked', () => {
    return <Button hx-post="/re-clicked" hx-swap="outerHTML" bg="yellow.600" />;
  })
  .post('/re-clicked', () => {
    return <Button hx-post="/clicked" hx-swap="outerHTML" bg="green.600" />;
  })
  .get('/styles.css', () => Bun.file('./styled-system/styles.css'))
  .get('/reset.css', () => Bun.file('./styled-system/reset.css'))
  .get('/global.css', () => Bun.file('./styled-system/global.css'))
  .get('/tokens/index.css', () => Bun.file('./styled-system/tokens/index.css'))
  .get('/tokens/keyframes.css', () => Bun.file('./styled-system/tokens/keyframes.css'))
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
