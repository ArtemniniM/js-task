// 5. Создай класс TextSource, метод get() → "education is powerful".
// ; Создай наследника VowelCounter, метод get(), который возвращает количество гласных букв.
// ; Ожидаемый результат: 9.

class TextSource {
  get() {
    return "education is powerful";
  }
}
class VowelCounter extends TextSource {
  get() {
    const string = super.get();
    let count = 0;
    const vowels = ["a", "e", "u", "i", "o", "y"];
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
    return count;
  }
}
const resultCount = new VowelCounter();
console.log(resultCount.get());
