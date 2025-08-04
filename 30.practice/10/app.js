// 10. Создай класс TextCleaner, метод clean(text) удаляет знаки препинания и приводит текст к нижнему регистру.
// ; Пример: "Hello, World!" → "hello world".
// ; Создай наследника WordCounter, метод count_words(text) возвращает количество слов.
// ; Пример: "Hello, World!" → 2.

class TextCleaner {
  clean() {
    let string = "Hello, World!";
    const sign = [".", "!", ","];
    let array = [];
    for (let i = 0; i < string.length; i++) {
      if (!sign.includes(string[i])) {
        array.push(string[i].toLowerCase());
      }
    }
    return array.join("");
  }
}
class WordCounter extends TextCleaner {
  count_words() {
    const res = this.clean();
    return res.split(" ").length;
  }
}
const wordCounter = new WordCounter();
console.log(wordCounter.count_words());
