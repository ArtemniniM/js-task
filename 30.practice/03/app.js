// 3. Создай класс BaseNumbers с методом get_numbers() →  возвращает массив рандомных чисел Math.random.
// ; Создай наследника EvenDoubler с методом get_numbers(), который удваивает только четные числа.
// ; Ожидаемый результат: [4, 8].

class BaseNumbers {
  get_numbers() {
    const array = [Math.round(Math.random() * 10)];
    return array;
  }
}
class EvenDoubler extends BaseNumbers {
  get_numbers() {
    const baseNums = super.get_numbers();
    const res = baseNums.map((el) => (el % 2 === 0 ? el * 2 : el));
    return res;
  }
}
const resultNums = new EvenDoubler();
console.log(resultNums.get_numbers());
