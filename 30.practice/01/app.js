// ; 1. Создай класс NumberFilter с методом get_numbers(), который возвращает [1, 2, 3, 4, 5, 6].
// ; Создай наследника EvenFilter и метод filter_numbers(), который перебирает массив и возвращает только четные.
// ; Ожидаемый результат: [2, 4, 6].

class NumberFilter {
  get_numbers() {
    return [1, 2, 3, 4, 5, 6];
  }
}
class EvenFilter extends NumberFilter {
  filter_numbers() {
    return this.get_numbers().filter((el) => el % 2 === 0);
  }
}
const resultEven = new EvenFilter();
console.log(resultEven.filter_numbers());
