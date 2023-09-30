import { Breadcrumb, TodoItem, TodoList } from '@/components';
import { db } from '@/db';
import { todos } from '@/db/schema';
import { Layout } from '@/layouts';
import { html } from '@elysiajs/html';
import { css } from '@styled-system/css';
import { eq } from 'drizzle-orm';
import { Elysia, t } from 'elysia';

export const tasks = new Elysia()
  .use(html())
  .get('/tasks', ({ html }) =>
    html(
      <Layout>
        <body
          class={css({
            height: '100vh',
            margin: 0,
            bg: 'gray.200',
          })}
        >
          <Breadcrumb text="Tasks" />
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
  );
