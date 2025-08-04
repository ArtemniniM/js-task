// Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: " Learning new things"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"

class SentenceRepository {
  sentences = ["Hello world", "This is a longer sentence", "Short"];
}
class LongestSentence extends SentenceRepository {
  getLongestSentence() {
    let max = 0;
    for (let i = 0; i < this.sentences.length; i++) {
      const arr = this.sentences[i].split(" ");
      if (arr.length > max) max = arr.length;
    }
    const res = this.sentences.filter((el) => el.length === max);
    return res;
  }
}
const result = new LongestSentence();
console.log(result.getLongestSentence());
