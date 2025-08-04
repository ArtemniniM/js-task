// 13. Создай класс NumberGen, метод get(n) → возвращает массив [1, 2, 3, 4, 5].
// ; Создай наследника SplitEvenOdd, метод getData(n) возвращает массив из двух списков: четные и нечетные.
// ; Пример: '[2, 4] [1, 3, 5]'

class NumberGen {
  get(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
}
class SplitEvenOdd extends NumberGen {
  getData(n) {
    const num = this.get(n);
    let evens = [];
    let odds = [];
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 === 0) {
        evens.push(num[i]);
      } else {
        odds.push(num[i]);
      }
    }
    return [evens, odds];
  }
}
const split = new SplitEvenOdd();
console.log(split.getData(5));
