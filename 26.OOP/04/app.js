// 4. Создай класс Multiplier с методом double, который возвращает удвоенное число. Проверь, что метод работает, вызвав его через объект.

class Multiplier {
  double(num) {
    console.log(num * 2);
  }
}
const multi = new Multiplier();
multi.double(4);
