// Найти сумму всех чисел, кратных 3.
//  Массив: [1, 3, 6, 7, 9]
//  Использовать: filter, %, reduce
//  Результат: 18

const arr = [1, 3, 6, 7, 9];

const res = arr.filter((el) => el % 3 === 0).reduce((sum, elem) => (sum += elem), 0);
console.log(res);
