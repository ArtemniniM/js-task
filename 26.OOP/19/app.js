// Создайте класс FactorialCalculator с методом factorial(n), который возвращает факториал числа.

class FactorialCalculator {
  factorial(n) {
    if (n < 1) return 1;
    return n * this.factorial(n - 1);
  }
}
const factorial = new FactorialCalculator();
console.log(factorial.factorial(6));
