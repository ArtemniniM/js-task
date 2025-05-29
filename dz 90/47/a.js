// Отфильтровать числа больше 10 и посчитать их среднее значение.
//  Массив: [5, 15, 20]
//  Использовать: filter (> 10), reduce (суммирование), length
//  Результат: 17.5

const arr = [5, 15, 20];

const res1 = arr.filter((el) => el > 10);
const res2 = res1.reduce((sum, elem) => (sum += elem), 0);
console.log(res2 / res1.length);
