// Создайте класс Library, принимающий массив книг (объекты с title и author). Добавьте метод
// findByAuthor(authorName), который возвращает все книги конкретного автора через filter().
// Массив:

const books = [
  { title: "Book One", author: "Author A" },
  { title: "Book Two", author: "Author B" },
  { title: "Book Three", author: "Author A" },
  { title: "Book Four", author: "Author C" },
  { title: "Book Five", author: "Author B" },
  {
    title: "Book Six",
    author: "Author D",
  },
  { title: "Book Seven", author: "Author A" },
  { title: "Book Eight", author: "Author E" },
  { title: "Book Nine", author: "Author C" },
  { title: "Book Ten", author: "Author F" },
];

class Library {
  books = [];
  constructor(books) {
    this.books = books;
  }

  findByAuthor(authorName) {
    const res = this.books.filter((el) => {
      return el.author === authorName;
    });
    return res;
  }
}
const library = new Library(books);
console.log(library.findByAuthor("Author F"));
