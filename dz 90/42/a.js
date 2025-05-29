// Получить сумму всех чётных чисел в массиве.
//  Массив: [1, 2, 3, 4]
//  Использовать: filter (% 2 === 0), reduce (суммирование)
//  Результат: 6

const arr = [1, 2, 3, 4];
const chet = arr.filter((el) => el % 2 === 0);
const res = chet.reduce((sum, elem) => (sum += elem), 0);
console.log(res);
