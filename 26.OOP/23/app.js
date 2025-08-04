// Класс ArraySummer, в конструктор передаётся массив чисел. Сразу после создания объекта считается сумма и выводится.

class ArraySummer {
  constructor(array) {
    this.sum = array.reduce((sum, el) => sum + Number(el), 0);
    console.log(this.sum);
  }
}
const arraySum = new ArraySummer([1, 2, 3]);
