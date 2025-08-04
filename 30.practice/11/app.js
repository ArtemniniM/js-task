// 11. Создай класс WordExtractor, метод get_words(text) возвращает уникальные слова из текста.
// ; Пример: "hi hello hi" → ["hi", "hello"].
// ; Создай наследника WordLengths, метод get_words(text) возвращает список длин этих слов.
// ; Пример: [2, 5].

class WordExtractor {
  get_words() {
    const test = "hi hello hi";
    const spl = test.split(" ");
    let arr = [];
    for (let i = 0; i < spl.length; i++) {
      if (!arr.includes(spl[i])) {
        arr.push(spl[i]);
      }
    }
    return arr;
  }
}
class WordLengths extends WordExtractor {
  get_words() {
    const filtArr = super.get_words();
    const res = [];
    for (let i = 0; i < filtArr.length; i++) {
      res.push(filtArr[i].length);
    }
    return res;
  }
}
const wordLengths = new WordLengths();
console.log(wordLengths.get_words());
