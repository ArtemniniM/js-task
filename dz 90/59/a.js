// Найти индекс первого отрицательного числа в массиве.
//  Массив: [3, -1, 5, -2]
//  Использовать: findIndex (num < 0)
//  Результат: 1

const arr = [3, -1, 5, -2];
const index = arr.findIndex(num=>num < 0);
console.log(index);
