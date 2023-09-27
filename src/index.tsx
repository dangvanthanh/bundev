import cors from '@elysiajs/cors';
import { html } from '@elysiajs/html';
import staticPlugin from '@elysiajs/static';
import { css } from '@styled-system/css';
import { eq } from 'drizzle-orm';
import { Elysia, t } from 'elysia';
import { Layout } from './components/Layout';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { db } from './db';
import { todos } from './db/schema';

const port = process.env.PORT || 3000;

const app = new Elysia()
  .use(cors())
  .use(staticPlugin())
  .use(html())
  .get('/', ({ html }) =>
    html(
      <Layout>
        <body
          class={css({
            height: '100vh',
            margin: 0,
            bg: 'gray.200',
          })}
        >
          <div hx-get="/todos" hx-swap="innerHTML" hx-trigger="load" />
        </body>
      </Layout>,
    ),
  )
  .get('/todos', async () => {
    const data = await db.select().from(todos).all();
    return <TodoList todos={data} />;
  })
  .post(
    '/todos/toggle/:id',
    async ({ params }) => {
      const oldTodo = await db.select().from(todos).where(eq(todos.id, params.id)).get();
      const newTodo = await db
        .update(todos)
        .set({ completed: !oldTodo?.completed })
        .where(eq(todos.id, params.id))
        .returning()
        .get();

      return <TodoItem {...newTodo} />;
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    },
  )
  .delete(
    '/todos/:id',
    async ({ params }) => {
      await db.delete(todos).where(eq(todos.id, params.id)).run();
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    },
  )
  .post(
    '/todos',
    async ({ body }) => {
      const newTodo = await db.insert(todos).values(body).returning().get();
      return <TodoItem {...newTodo} />;
    },
    {
      body: t.Object({
        content: t.String({ minLength: 1 }),
      }),
    },
  )
  .get('/styles.css', () => Bun.file('./styled-system/styles.css'))
  .get('/reset.css', () => Bun.file('./styled-system/reset.css'))
  .get('/global.css', () => Bun.file('./styled-system/global.css'))
  .get('/tokens/index.css', () => Bun.file('./styled-system/tokens/index.css'))
  .get('/tokens/keyframes.css', () => Bun.file('./styled-system/tokens/keyframes.css'))
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
