// Класс VowelCounter, который в конструкторе принимает строку и выводит количество гласных.

class VowelCounter {
  constructor(str) {
    const vowels = ["a", "e", "y", "u", "i", "o"];
    let counter = 0;
    str.split("").forEach((el) => {
      vowels.includes(el) ? counter++ : null;
    });
    console.log(counter);
  }
}
const vowelsCount = new VowelCounter("artemka");
