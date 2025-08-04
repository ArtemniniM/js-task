// 3. Создай класс NumberChecker с методом is_even, который принимает число и возвращает True, если оно чётное. Вызови через объект.

class NumberChecker {
  is_even(num) {
    if (num % 2 === 0) console.log(true);
  }
}
const numchek = new NumberChecker();
numchek.is_even(2);
