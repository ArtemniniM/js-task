// Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon",
//   "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
//   getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
//   значению.
//   Входные:
//   const repo = new FilteredWords();
//   repo.getWordsByLength(5);
//   → Результат: ["apple", "lemon", "mango"]

class StringRepository {
  words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"];
}
class FilteredWords extends StringRepository {
  getWordsByLength(length) {
    const newArr = [];
    this.words.forEach((el) => (el.length === length ? newArr.push(el) : null));
    return newArr;
  }
}
const filterLength = new FilteredWords();
console.log(filterLength.getWordsByLength(5));
