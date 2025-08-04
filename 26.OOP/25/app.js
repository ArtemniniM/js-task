// Класс SpaceRemover содержит функцию, которая убирает все лишние пробелы и выводит результат.

// new SpaceRemover("  Удали       все     пробелы      "); // "Удали все лишние пробелы"

class SpaceRemover {
  cleanSpace(str) {
    const cleaned = str.replace(/\s+/g, " ").trim();
    console.log(cleaned);
  }
}
const space = new SpaceRemover();
space.cleanSpace("  Удали       все     пробелы      ");
