import cors from '@elysiajs/cors';
import { html } from '@elysiajs/html';
import staticPlugin from '@elysiajs/static';
import { Elysia } from 'elysia';
import * as elements from 'typed-html';
import { css } from '../styled-system/css';
import { Button } from './components/Button';
import { Card } from './components/Card';
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
            background: 'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)',
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            fontFamily: 'Poppins, sans-serif',
          })}
        >
          <Card />
        </body>
      </Layout>,
    ),
  )
  .post('/clicked', () => {
    return <Button hx-post="/re-clicked" hx-swap="outerHTML" color="red.600" />;
  })
  .post('/re-clicked', () => {
    return <Button hx-post="/clicked" hx-swap="outerHTML" color="yellow.600" />;
  })
  .get('/styles.css', () => Bun.file('./styled-system/styles.css'))
  .get('/reset.css', () => Bun.file('./styled-system/reset.css'))
  .get('/global.css', () => Bun.file('./styled-system/global.css'))
  .get('/tokens/index.css', () => Bun.file('./styled-system/tokens/index.css'))
  .get('/tokens/keyframes.css', () => Bun.file('./styled-system/tokens/keyframes.css'))
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
