// 6. Создай класс Sequence, метод get() → возвращает массив чисел сгенерированных prompt.
// ; Создай наследника OddIndexSum , метод sum(), который суммирует элементы на нечетных индексах.
// ; Ожидаемый результат: 7 + 5 = 12.

class Sequence {
  get() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(+prompt());
    }
    return arr;
  }
}
class OddIndexSum extends Sequence {
  sum() {
    const res = this.get();
    let sum = 0;
    for (let j = 0; j < res.length; j++) {
      if (j % 2 !== 0) {
        sum += res[j];
      }
    }
    return sum;
  }
}
const sumOfElems = new OddIndexSum();
console.log(sumOfElems.sum());
