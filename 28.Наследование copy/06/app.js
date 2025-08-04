// Создайте класс Movie с полями title, year и rating. Добавьте метод isPopular(), возвращающий true,
// если рейтинг выше 8. Вызовите метод из нескольких экземпляров классов с разными значениями
// rating.

class Movie {
  title = null;
  year = null;
  rating = null;
  constructor(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
  isPopular() {
    return this.rating > 8;
  }
}
const movie1 = new Movie("The Nun", 2018, 8.8);
const movie2 = new Movie("Interstellar", 2014, 8.6);
const movie3 = new Movie("The Room", 2003, 3.7);

console.log(`${movie1.title} popular?`, movie1.isPopular());
console.log(`${movie2.title} popular?`, movie2.isPopular());
console.log(`${movie3.title} popular?`, movie3.isPopular());
