// 2. Создай класс TextCollection с массивом строк и методами:
// - countWords() — общее количество слов во всех строках
// - findLongestWord() — самое длинное слово среди всех строк
// - filterByLength(minLength) — возвращает массив строк длиной не меньше minLength
// Создай класс UniqueTextCollection, который наследует TextCollection и добавляет метод:
// - uniqueWords() — массив уникальных слов из всех строк

class TextCollection {
  array = ["Жизнь — это движение", "Код — это поэзия", "Учиться никогда не поздно", "Сила в простоте"];
  countWords() {
    return this.array.map((str) => str.split(/\s+/)).reduce((acc, words) => acc + words.length, 0);
  }
  findLongestWord() {}
  filterByLength(minLength) {
    return this.array.filter((str) => str.length >= minLength);
  }
}
class UniqueTextCollection extends TextCollection {
  uniqueWords() {}
}
const collection = new TextCollection();
const unique = new UniqueTextCollection();
console.log(collection.countWords());
console.log(collection.findLongestWord());
console.log(collection.filterByLength(5));
console.log(unique.uniqueWords());
