// ; 4. Создай класс IntGenerator, метод getNums() возвращает [-3, 1, 4, -1].
// ; Создай наследника PositiveSum и метод метод getNums(), который находит сумму положительных.
// ; Ожидаемый результат: 5.

class IntGenerator {
  getNums() {
    return [-3, 1, 4, -1];
  }
}
class PositiveSum extends IntGenerator {
  getNums() {
    const array = super.getNums();
    const result = array.filter((elem) => elem > 0).reduce((sum, el) => sum + el, 0);
    return result;
  }
}
const resultPos = new PositiveSum();
console.log(resultPos.getNums());
