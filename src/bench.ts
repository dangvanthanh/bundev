import { bench, run } from 'mitata';
import { Database } from 'bun:sqlite';

const db = Database.open('./books.sqlite');

{
  const sql = db.prepare(`SELECT * FROM "books"`);
  bench(`SELECT * FROM "books"`, () => {
    sql.all();
  });
}

await run();
