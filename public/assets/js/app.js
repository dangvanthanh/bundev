function Books() {
  return {
    book: {
      name: '',
      author: '',
    },
    selectedBook: {},
    books: [],
    openNew: false,
    openEdit: false,
    initialize() {
      fetch('/books')
        .then((res) => res.json())
        .then((books) => {
          this.books = books;
        });
    },
    openAddBook() {
      this.book = {
        name: '',
        author: '',
      };
      this.openNew = true;
    },
    closeAddBook() {
      this.book = {
        name: '',
        author: '',
      };
      this.openNew = false;
    },
    addBook() {
      const [name, author] = [this.book.name.trim(), this.book.author.trim()];

      fetch('/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, author }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            this.books.push({
              id: res.id,
              name,
              author,
            });
            this.closeAddBook();
          }
        });
    },
    openEditBook(id) {
      const selectedBook = this.books.find((book) => book.id === id);
      this.selectedBook = Object.assign({}, selectedBook);
      this.openEdit = true;
    },
    closeEditBook() {
      this.selectedBook = {};
      this.openEdit = false;
    },
    updateBook() {
      const [id, name, author] = [
        this.selectedBook.id,
        this.selectedBook.name.trim(),
        this.selectedBook.author.trim(),
      ];

      fetch(`/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, author }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            this.books = this.books.map((book) => {
              if (book.id === id) {
                book.name = name;
                book.author = author;
              }
              return book;
            });
            this.closeEditBook();
          }
        });
    },
    deleteBook(id) {
      fetch(`/books/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            const index = this.books.findIndex((book) => book.id === id);
            this.books.splice(index, 1);
          }
        });
    },
  };
}

document.addEventListener('alpine:init', () => {
  Alpine.data('Books', Books);
});
