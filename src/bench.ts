import { eq } from 'drizzle-orm';
import { bench, run } from 'mitata';
import { db } from './db';
import { todos } from './db/schema';

const todoIdStart = 1;
const todoIdEnd = 100;
const todoIds = Array.from({ length: todoIdEnd - todoIdStart }, (_, i) => i + todoIdStart);

bench('Todos: getAll', () => async () => await db.select().from(todos).all());

bench('Todos: getById', () => async () => {
  for (const id of todoIds) {
    await db.select().from(todos).where(eq(todos.id, id));
  }
});

await run();
