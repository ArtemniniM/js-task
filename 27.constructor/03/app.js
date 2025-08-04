// Создайте класс Book с полями title и author. Значения полей задайте через конструктор. Добавьте
// метод getInfo(), возвращающий строку: "Название: ..., Автор: ...".\

class Book {
  title = null;
  author = null;
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getInfo() {
    console.log(`Название: ${this.title}, Автор: ${this.author}`);
  }
}
const book = new Book("den", "gi");
book.getInfo();
