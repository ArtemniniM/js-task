// *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix() → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

class CommonPrefix {
  arr = null;
  constructor(arr) {
    this.arr = arr;
  }
  findLongestPrefix() {
    let pref = "";

    for (let i = 0; i < this.arr[0].length; i++) {
      const char = this.arr[0][i];

      for (let j = 1; j < this.arr.length; j++) {
        if (this.arr[j][i] !== char) {
          return pref;
        }
      }
      pref += char;
    }
    return pref;
  }
}
const prefix = new CommonPrefix(["interview", "interval", "internet"]);
console.log(prefix.findLongestPrefix());
