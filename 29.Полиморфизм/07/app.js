// Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
// Результат: 5

class NumberGenerator {
  res;
  generateNumber() {
    this.res = Math.round(Math.random() * 100);
    return this.res;
  }
}
class SquareRootCalculator extends NumberGenerator {
  generateNumber() {
    const num = super.generateNumber();
    for (let i = 1; i <= num; i++) {
      if (i * i === num) return i;
    }
    return null;
  }
}

const calculator = new SquareRootCalculator();
console.log(calculator.generateNumber());
