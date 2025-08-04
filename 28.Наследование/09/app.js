// Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
// вызывает generateArray() и возвращает массив, где каждый элемент возведен в квадрат.
// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]

class DataGenerator {
  size = 5;
  generateArray() {
    const arr = [];
    for (let i = 1; i <= this.size; i++) {
      arr.push(i);
    }
    return arr;
  }
}
class SquareArray extends DataGenerator {
  getSquareArray() {
    const res = this.generateArray();
    return res.map((el) => el ** 2);
  }
}
const result = new SquareArray();
console.log(result.getSquareArray());
