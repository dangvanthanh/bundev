import { Database } from 'bun:sqlite';

interface Book {
  id?: number;
  name: string;
  author: string;
}

export class BooksDatabase {
  private db: Database;

  constructor() {
    this.db = new Database('books.sqlite');

    this.initialize()
      .then(() => console.log('Database initialized'))
      .catch(console.error);
  }

  async getBooks() {
    return this.db.query('SELECT * FROM books').all();
  }

  async getBook(id: number) {
    return this.db.query(`SELECT * FROM books WHERE id = ${id}`).get();
  }

  async addBook(book: Book) {
    // q: Get id type safely
    return this.db
      .query('INSERT INTO books (name, author) VALUES (?, ?) RETURNING id')
      .get(book.name, book.author) as Book;
  }

  async updateBook(id: number, book: Book) {
    return this.db.run(`UPDATE books SET name = '${book.name}', author = '${book.author}' WHERE id = ${id}`);
  }

  async deleteBook(id: number) {
    return this.db.run(`DELETE FROM books WHERE id = ${id}`);
  }

  async initialize() {
    return this.db.run(
      'CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT)',
    );
  }
}
